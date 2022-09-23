/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your customer ViewModel code goes here
 */
//This class is exported directly as module. To import it
define([

  "knockout",
"utils/Core",

"ojs/ojasyncvalidator-length",
"ojs/ojarraydataprovider",
"ojs/ojinputtext",
"ojs/ojinputnumber",
"ojs/ojformlayout",
"ojs/ojdatetimepicker",
"ojs/ojselectsingle",
"ojs/ojbutton",
"ojs/ojtable",
"ojs/ojchart"

],
 function(

  ko,
  CoreUtils,
  AsyncLengthValidator,
  ArrayDataProvider,
  vajza=0,
  djem=1,
  pie=[]
  ) {
    function CustomerViewModel() { //we are creating a class

          this._initAllObservables(); 
          this._initAllIds();
          this._initValidators();
          this._initVariables();
          
        
      console.log("Girls without commitments "+vajza);
         
      var deptArray = [];
      this.deptObservableArray = ko.observableArray(deptArray);
      this.dataprovider = new ArrayDataProvider(this.deptObservableArray, { keyAttributes: 'Name' });
      this.groupValid = ko.observable();
      this.isEmptyTable = ko.computed(function () {
        return this.deptObservableArray().length === 0;
      }, this);
      // add to the observableArray
     // this.addRow= this._onCreateButtonClick.bind(this);
      pie=[{
      id: 0,
      series: "Female",
      group: "Group A",
      value: vajza
      },
 
      {
      id: 1,
      series: "Male",
      group: "Group A",
      value: djem
      }] 
      console.log(pie[1].value);
      var chartData = ko.observableArray(pie);

      this.dProvider = new ArrayDataProvider( chartData, {
      keyAttributes: "id",
      });

      console.log(this.dProvider);

      ///therritja e  butonit
      this.addRow=function(){
      var dept = {
        
      Name: this.inputNameValue(),
      LastName: this.inputLastNameValue(),
      Birthday: this.inputBirthdayValue(),
      Gender: this.inputGenderValue(),
      BirthdayPlace: this.inputBirthplaceValue(),
      Age: this.inputAgeValue()
    };
    if(dept.Name!=null){
        this.deptObservableArray.push(dept); 
    }
   
     console.log("deptArray[i].Name");
    console.log(deptArray[0].Name);
    console.log(dept.Name);

    var count=0;
    for(var i=0; i<deptArray.length-1; i++){
      if(deptArray[i].Name==dept.Name){
        count++;
      }
      else{
        count=0;
      }
    }

    if(dept.Gender=="Female"&&count==0){
      vajza++; 
      console.log("Girls after adding "+vajza);
    }
    if(dept.Gender=="Male" &&count==0){
       djem++;
       console.log("Boys after adding "+djem);
     }

    pie[0].value=vajza;
    pie[1].value=djem;
    console.log(pie);

    valueCache = {};
    chartData(pie);
  
    console.log(this.dProvider);

    console.log("Vector after  "+pie[0].value);
    console.log("array i fillimit");
    console.log(deptArray);

   }.bind(this);
   
   
}

// function ChartModel() {

// pie=[{
//       id: 0,
//       series: "Female",
//       group: "Group A",
//       value: vajza
//     },
 
//     {
//       id: 1,
//       series: "Male",
//       group: "Group A",
//       value: djem
//     }]
// console.log(pie[1].value);
// this.dProvider = new ArrayDataProvider( pie, {
//     keyAttributes: "id",
// });
// }



 /**
     * @function _initValidators
     * @description Initializes all validators.
     * 
     * 
     */

    //when you are trying to use a variable to assign id you need to bindi it 
    //using column notation
    CustomerViewModel.prototype._initValidators= function(){
           
      this.inputFirstNameValidators= ko.observableArray([
        new AsyncLengthValidator({
          min:3,
          max:35,
          hint: {
            inRange:"Custom hint: value must be at least  {min} and at most  {max} charachter  ",
          },
          messageSummary:{
            tooLong: "Custom:Too many characters",
            tooShort: "Custom:Too few characters",
          
          },
          messageDetail:{
            tooLong:"Custom: Number of characters is too high. Enter at most {max} charachters",
            tooShort:"Custom: Number of characters is too low. Enter at least {min} charachters",
          },
        }),
      ]);
      
      this.inputLastNameValidators= ko.observableArray([
        new AsyncLengthValidator({
          min:3,
          max:35,
          hint: {
            inRange:"Custom hint: value must be at least  {min} and at most  {max} charachter  ",
          },
          messageSummary:{
            tooLong: "Custom:Too many charachters",
            tooShort: "Custom:Too few charachters",
          
          },
          messageDetail:{
            tooLong:"Custom: Number of charachters is too high. Enter at most {max} charachters",
            tooShort:"Custom: Number of charachters is too low. Enter at least {min} charachters",
          },
        }),
      ]);
  
    };



    //when you are trying to use a variable to assign id you need to bindi it 
    //using column notation



  

    /**
     * @function _initVariables
     * @description Initializes all variables.
     * 
     * 
     */

    //when you are trying to use a variable to assign id you need to bindi it 
    //using column notation
    CustomerViewModel.prototype._initVariables= function(){
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      
      today = yyyy + '-' + mm + '-' + dd;
      console.log(today);
           this.inputBirthdayMaxValue= today;
    
    //per gender
    this.inputGenderDataProvider=new ArrayDataProvider([
      {
        value: 1,
        label: 'Female'
      },
      {
        value:2,
        label:'Male'
      }
    ],{
      keyAttributes:"label",
    });
    };


    /**
     * @function _initAllIds
     * @description Initializes all ids.
     * 
     * 
     */

    //when you are trying to use a variable to assign id you need to bindi it 
    //using column notation
    CustomerViewModel.prototype._initAllIds= function(){
   
      this.inputNameId= CoreUtils.generateUniqueId();
         
      this.inputLastNameId= CoreUtils.generateUniqueId();
         
      this.inputBirthdayId= CoreUtils.generateUniqueId();
         
      this.inputGenderId= CoreUtils.generateUniqueId();
      this.inputBirthplaceId= CoreUtils.generateUniqueId();
         
      this.inputAgeId= CoreUtils.generateUniqueId();
    };


    

    /**
     * @function _initAllObservables
     * @description Initializes all the observable values
     */
    CustomerViewModel.prototype._initAllObservables= function(){

      //this are the variables
      this.inputNameValue= ko.observable(null);
      this.inputLastNameValue= ko.observable(null); 
      this.inputBirthdayValue=ko.observable(null);
      this.inputGenderValue=ko.observable(null);
      this.inputBirthplaceValue= ko.observable(null);
      this.inputAgeValue= ko.observable(null);
      this.isInputLastNameDisabled= ko.observable(true);
      this.dProvider =ko.observable();
   

  
     
      this.onInputNameValueChange= function(event){
        const value= event.detail.value;
        if(value){
          this.isInputLastNameDisabled(false);
          return;
        }
        this.isInputLastNameDisabled(true);
              console.log(event);
      }.bind(this); //duet e bindohet sepse mund te mari this as scope of function not of the CustomerViewModel

    };

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return CustomerViewModel;
  }
);
