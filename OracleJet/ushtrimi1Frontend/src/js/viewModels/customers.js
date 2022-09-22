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

"ojs/ojasyncvalidator-length",
"ojs/ojarraydataprovider",
"ojs/ojinputtext",
"ojs/ojinputnumber",
"ojs/ojformlayout",
"ojs/ojdatetimepicker",
"ojs/ojselectsingle",
"ojs/ojbutton",
"ojs/ojcollectiondataprovider", 
"ojs/ojtable"
],
 function(

  ko,
  CoreUtils,
  AsyncLengthValidator,
  ArrayDataProvider,
  CollectionDataProvider
  ) {
    function CustomerViewModel() { //we are creating a class

          this._initAllObservables(); 
          this._initAllIds();
          this._initValidators();
          this._initVariables();
          
        //  this.onCreateButtonClick= this._onCreateButtonClick.bind(this);
           this.onCreateButtonClick = () => {
        const recordAttrs = {
            DepartmentId: this.inputNameValue(),
            DepartmentName: this.inputLastNameValue()
        };
        this.DeptCol().create(recordAttrs, {
            wait: true,
            contentType: 'application/vnd.oracle.adf.resource+json',
            success: (model, response) => { },
            error: (jqXHR, textStatus, errorThrown) => { }
        });
        this.DeptCol(new this.DeptCollection());
        new MockRESTServer(JSON.parse(jsonData), {
            id: 'DepartmentId',
            url: /^http:\/\/mockrest\/stable\/rest\/Departments(\?limit=([\d]*))?$/i,
            idUrl: /^http:\/\/mockrest\/stable\/rest\/Departments\/([\d]+)$/i
        });
        this.datasource(new CollectionDataProvider(this.DeptCol()));
    };
    }

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

/**
     * @function _onCreateButtonClick
     * @description 
     * 
     * 
     */

    //when you are trying to use a variable to assign id you need to bindi it 
    //using column notation



    // CustomerViewModel.prototype._onCreateButtonClick= function(){    
     
    //   alert('button pressed');
   
    // };







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
      },
      {
        value:3,
        label:'Other'
      }
    ],{
      keyAttributes:"value",
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
      this.DeptCol = ko.observable();
      this.datasource=ko.observable();

  
     
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
