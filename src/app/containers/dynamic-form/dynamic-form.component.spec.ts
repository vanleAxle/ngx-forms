import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicPanelComponent } from '../dynamic-panel/dynamic-panel.component';
import { DynamicFieldDirective } from '../../components/dynamic-field/dynamic-field.directive';
import { Component, NgModule } from "@angular/core";
import { DynamicFormComponent } from "./dynamic-form.component";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DynamicFieldService } from "../../services/dynamic-field.service";
import { PreloadService } from '../../services/preload.service';
import { FormInputComponent } from '../../components/form-input/form-input.component';
import { CommonModule } from '@angular/common';
import { FormSelectComponent } from '../../components/form-select/form-select.component';
import { FormInputHiddenComponent } from '../../components/form-hidden/form-hidden.component';
import { By } from '@angular/platform-browser';
import { FormNavModule } from '../../../nav/nav-app';

interface IFormConfig {
    form: any;
    fields: any[]
}

interface IDynamicForm {
    formConfig: IFormConfig
    data: any
    dynamicForm: any
    lookups: any
}

@Component({
    template: `<dynamic-form [formConfig]="formConfig" #form="dynamicForm" [model]="data" [lookups]="lookups"></dynamic-form>`
})
class TestComponent implements IDynamicForm {
    formConfig
    data: {};
    dynamicForm: {};
    lookups: {};
}

@NgModule({
    declarations: [FormInputComponent, FormSelectComponent, FormInputHiddenComponent],
    imports: [FormsModule, ReactiveFormsModule, CommonModule, FormNavModule],
    entryComponents: [FormInputComponent, FormSelectComponent, FormInputHiddenComponent]
})
class TestModule { }

describe('DynamicFormComponent', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let directiveEl;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DynamicFieldDirective, TestComponent, DynamicFormComponent, DynamicPanelComponent],
            imports: [FormsModule, ReactiveFormsModule, TestModule, FormNavModule],
            providers: [DynamicFieldService, PreloadService]
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(TestComponent);
                component = fixture.componentInstance;
                component.formConfig = {
                    form: [{
                        fields: [
                            { type: 'hidden', name: 'id' },
                            { type: 'text', label: 'Publication Title:', name: 'title', placeholder: '', required: true },
                            { type: 'select', label: 'Publication Type', name: 'activityType', options: ['a', 'b'] }
                        ]
                    }]
                };

                fixture.detectChanges();
            });
    }));

    it('loads input-hidden component', () => {
        directiveEl = fixture.debugElement.query(By.directive(FormInputHiddenComponent));
        expect(directiveEl).not.toBeNull();
    });

    it('loads input-select component', () => {
        directiveEl = fixture.debugElement.query(By.directive(FormSelectComponent));
        expect(directiveEl).not.toBeNull();
    });

    it('loads dynamic-panel component', () => {
        directiveEl = fixture.debugElement.query(By.directive(DynamicPanelComponent));
        expect(directiveEl).not.toBeNull();
    });

    it('loads dyncamic-field component', () => {
        directiveEl = fixture.debugElement.query(By.directive(DynamicFieldDirective));
        expect(directiveEl).not.toBeNull();
    });

    it('loads form-input component', () => {
        directiveEl = fixture.debugElement.query(By.directive(FormInputComponent));
        expect(directiveEl).not.toBeNull();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});

describe('DynamicFormComponent Core', () => {
    let component: DynamicFormComponent;
    let fixture: ComponentFixture<DynamicFormComponent>;
    let model = { test: 'test', title: 'title' };

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DynamicFieldDirective, TestComponent, DynamicFormComponent, DynamicPanelComponent],
            imports: [FormsModule, ReactiveFormsModule, TestModule, FormNavModule],
            providers: [DynamicFieldService, PreloadService]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DynamicFormComponent);
        component = fixture.componentInstance;
        component.formConfig = {
            form: [
                { label: 'fields and panels', panels: [{ label: 'fields', fields: [{ type: 'text', name: 'title', required: true }] }] },
                { label: 'fields, no panels', fields: [{ type: 'text', name: 'test', required: true }] },
                { label: 'no fields with panels', panels: [{ label: 'no fields' }] },
                { label: 'no fields, no panels' }
            ]
        };
        component.model = model;
        fixture.detectChanges();
    });

    describe('ngOnInit()', () => {

        it('should create group', () => {
            expect(component.form).toBeDefined();
        });

        describe('Lookup Expansion', () => {

            it('should not find lookup when no lookups were passed', () => {
                component.lookups = null;
                component.formConfig = { form: [{ fields: [{ type: 'text', name: 'title', lookup: 'test' }] }] };
                component.ngOnInit();
                expect(component.formConfig.form[0].fields[0].options).toBeUndefined();
            });

            it('should not find lookup when no lookups found', () => {
                component.lookups = { test: ['a', 'b', 'c'] };;
                component.formConfig = { form: [{ fields: [{ type: 'text', name: 'title' }] }] };
                component.ngOnInit();
                expect(component.formConfig.form[0].fields[0].options).toBeUndefined();
            });

            it('should not copy lookup with wrong name', () => {
                component.lookups = { test: ['a', 'b', 'c'] };;
                component.formConfig = { form: [{ fields: [{ type: 'text', name: 'title', lookup: 'test1' }] }] };
                component.ngOnInit();
                expect(component.formConfig.form[0].fields[0].options).toBeUndefined();
            });

            it('should copy lookup', () => {
                component.lookups = { test: ['a', 'b', 'c'] };;
                component.formConfig = { form: [{ fields: [{ type: 'text', name: 'title', lookup: 'test' }] }] };
                component.ngOnInit();
                expect(component.formConfig.form[0].fields[0].options).toEqual(['a', 'b', 'c']);
            });

            it('should extract lookup', () => {
                component.lookups = { test: [{ t: 'a' }, { t: 'b' }, { t: 'c' }] };;
                component.formConfig = { form: [{ fields: [{ type: 'text', name: 'title', lookup: { name: 'test', extract: 't' } }] }] };
                component.ngOnInit();
                expect(component.formConfig.form[0].fields[0].options).toEqual(['a', 'b', 'c']);
            });

        });

    });

});
