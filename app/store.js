import Vue from 'vue';
import Vuex from 'vuex';

const Sqlite = require("nativescript-sqlite");
const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
const BarcodeScanner = require('nativescript-barcodescanner').BarcodeScannerView;

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    database: null,
    data: [],
    data2: [],
    accessLevelResult: '',
    qrData: ''
  },
  mutations: {
    init(state, data) {
      state.database = data.database;
    },
    load(state, data) {
      state.data = [];
      for (var i = 0; i < data.data.length; i++) {
        state.data.push({
          emailAddress: data.data[i][0],
          password: data.data[i][1]
        });
      }
    },
    save(state, data) {
      state.data.push({
        emailAddress: data.data.emailAddress,
        password: data.data.password
      });
    }
  },
  actions: {
    init(context) {
      (new Sqlite("my.db")).then(db => {
        db.execSQL("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, emailAddress TEXT, password TEXT, accessLevel TEXT)").then(id => {
          context.commit("init", { database: db });
        }, error => {
          console.log("CREATE TABLE ERROR", error);
        });
      }, error => {
        console.log("OPEN DB ERROR", error);
      });
    },
    insert(context, data) {
      context.state.database.execSQL("INSERT INTO users (emailAddress, password, accessLevel) VALUES (?, ?, 'user')", [data.emailAddress, data.password]).then(id => {
        context.commit("save", { data: data });
      }, error => {
        console.log("INSERT ERROR", error);
      });
    },
    query(context) {
      context.state.database.all("SELECT emailAddress, password, accessLevel FROM users", []).then(result => {
        context.commit("load", { data: result });
        console.log(result)
        console.log(store.state.accessLevelResult)
      }, error => {
        console.log("SELECT ERROR", error);
      });
      
    },
    aa(context, qrData){
      console.log(qrData+ "store")
    },
    loginQuery(context, data) {
      let hehe;
      let numHolder;
      let accessLevelHolder;

      context.state.database.all("SELECT emailAddress FROM users", []).then(result => {
        context.commit("load", { data: result });
        
        let myObservableArray = new ObservableArray(999);    
        myObservableArray = new ObservableArray(result);
        
        for(var i=0; i<result.length; i++){
          const compareEmail = myObservableArray.getItem(i);
          if(compareEmail == data.emailAddress){
            hehe = compareEmail;
            numHolder = i;
            break;
          }
          // else{
          //   console.log("nope")
          // }
        }
        
      }, error => {
        console.log("SELECT ERROR", error);
      });


      context.state.database.all("SELECT accessLevel FROM users", []).then(result => {
        context.commit("load", { data: result });
        
        let myObservableArray = new ObservableArray(999);    
        myObservableArray = new ObservableArray(result);

        for(var i=0; i<result.length; i++){
          const compareAccessLevel = myObservableArray.getItem(numHolder);
          if(compareAccessLevel == 'admin'){
            accessLevelHolder = 'admin'
            break;
          }
          if(compareAccessLevel == 'user'){
            accessLevelHolder = 'user'
            break;
          }
        }
        
      }, error => {
        console.log("SELECT ERROR", error);
      });


      context.state.database.all("SELECT password FROM users", []).then(result => {
        context.commit("load", { data: result });
        
        let myObservableArray = new ObservableArray(999);    
        myObservableArray = new ObservableArray(result);
        
        for(var i=0; i<result.length; i++){
          const comparePassword = myObservableArray.getItem(numHolder);
          if(comparePassword == data.password){
            console.log("login successful!")
            this.state.accessLevelResult = accessLevelHolder
            break;
          }
          // else{
          //   console.log("nope")
          // }
        }
      }, error => {
        console.log("SELECT ERROR", error);
      });
    },
    deleteDb(context) {
      context.state.database.all("DELETE FROM users", []).then(result => {
        context.commit("load", { data: result });
      }, error => {
        console.log("SELECT ERROR", error);
      });
    },
  }
});

Vue.prototype.$store = store;

exports = store;

store.dispatch("init");