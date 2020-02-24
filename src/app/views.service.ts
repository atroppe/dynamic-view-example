import { Injectable } from '@angular/core';
import { View, ValidatorType } from './types/view';
import { SelectViewComponent } from './view/select-view/select-view.component';
import { TextViewComponent } from './view/text-view/text-view.component';
import { DateViewComponent } from './view/date-view/date-view.component';
import { TdfData } from './types/tdf-data';

@Injectable({
  providedIn: 'root'
})
export class ViewsService {
  private tdfData = new TdfData();
  private tdfQuestions: View[] = [
    new View(
      SelectViewComponent, `Did you take Viread, Truvada, Truvada PrEP, Atripla, Complera, or Stribild (if yes, select the type(s) that you took)?`, [], 'medication', ValidatorType.Required, [],
      ['viread', 'truvada', 'truvadaPrep', 'atripla', 'complera', 'stribild']
    ),
    new View(TextViewComponent, 'Reason for taking?', [], 'reason', ValidatorType.Required),
    new View(DateViewComponent, `When did you start taking this medication (month/year)?`, [], 'startDate', ValidatorType.Required),
    new View(DateViewComponent, `When did you stop taking this medication (month/year)?`, [], 'stopDate', ValidatorType.Required),
    new View(
      SelectViewComponent, `Were you diagnosed with any of the following bone injuries?`, [], 'boneInjuries', ValidatorType.Required, [],
      ['osteoporosis', 'osteopenia', 'osteomalacia', 'boneFractures', 'boneBreaks', 'toothLoss', 'other']
    )
  ];

  /**
   * Stores the form data from each view
   *
   * @param data A data object from one of the views
   */
  set tdfFormData(data: TdfData) {
    Object.assign(this.tdfData, data);
  }

  /**
   * Gets the complete data object
   */
  get tdfFormData(): TdfData {
    return this.tdfData;
  }

  /**
   * Returns all the views
   */
  getViews():View[] {
    return this.tdfQuestions;
  }
}