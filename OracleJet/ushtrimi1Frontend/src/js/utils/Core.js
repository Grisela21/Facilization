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
define([],
    function() {
     class CoreUtils {
         /**
          * @description 
          * @returns
          */
       constructor(){
         if(!CoreUtils.instance){
             this.counter= 0;
             CoreUtils.instance=this;
 
         }
         return CoreUtils.instance;
       }
   
    /**
     * @function generateUniqueId
     * @description 
     * @returns
     *
     */
 
    generateUniqueId(){
     return `uid-${this.counter++}`;
    }
    }
    //creating instance 
    const instance = new CoreUtils();
    return instance;
 }
   );
   