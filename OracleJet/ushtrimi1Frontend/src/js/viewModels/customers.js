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
define([

  "knockout",
"utils/Core",
"ojs/ojconverter-datetime", 
"ojs/ojinputtext",
"ojs/ojinputnumber",
//"ojs/ojinputdate",
//"ojs/ojcomboboxone",
"ojs/ojformlayout"

],
 function(

  ko,
  CoreUtils,

  ) {
    function CustomerViewModel() { //we are creating a class

          this._initAllObservables(); 
          this._initAllIds();
          
    }

 /**
     * @function _initValidators
     * @description Initializes all validators.
     * 
     * 
     */

    //when you are trying to use a variable to assign id you need to bindi it 
    //using column notation
    // CustomerViewModel.prototype._initValidators= function(){
           
    //   this.inputFirstNameValidators= ko.observableArray([
    //     new AsyncLengthValidator({
    //       min:5, 
    //       max:16,
    //       hint: {
    //         inRange:"Custom hint: value must be at least 16 charachter",
    //       },
    //       messageSummary:{
    //         tooLong: "Custom:Too many charachters",
    //         tooShort: "Custom: Too few charachters",
    //       },
    //       messageDetail:{
    //         tooLong:"Custom: Number of charachters is too high",
    //         tooShort: "Custom: umber of charachters is too low",
    //       },
    //     }),
    //   ]);
  
    // };


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
