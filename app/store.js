import Vue from 'vue';
import Vuex from 'vuex';

const Sqlite = require("nativescript-sqlite");
const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    database: null,
    data: [],
    loginResult: 3
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
    loginLoad(state, data) {
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
        db.execSQL("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, emailAddress TEXT, password TEXT)").then(id => {
          context.commit("init", { database: db });
        }, error => {
          console.log("CREATE TABLE ERROR", error);
        });
      }, error => {
        console.log("OPEN DB ERROR", error);
      });
    },
    insert(context, data) {
      context.state.database.execSQL("INSERT INTO users (emailAddress, password) VALUES (?, ?)", [data.emailAddress, data.password]).then(id => {
        context.commit("save", { data: data });
      }, error => {
        console.log("INSERT ERROR", error);
      });
    },
    query(context) {
      context.state.database.all("SELECT emailAddress, password FROM users", []).then(result => {
        context.commit("load", { data: result });
      }, error => {
        console.log("SELECT ERROR", error);
      });
    },
    loginQuery(context, data) {
      let hehe;
      let numHolder;
      context.state.database.all("SELECT emailAddress FROM users", []).then(result => {
        context.commit("loginLoad", { data: result });
        
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

      context.state.database.all("SELECT password FROM users", []).then(result => {
        context.commit("loginLoad", { data: result });
        
        let myObservableArray = new ObservableArray(999);    
        myObservableArray = new ObservableArray(result);
        
        for(var i=0; i<result.length; i++){
          const comparePassword = myObservableArray.getItem(numHolder);
          if(comparePassword == data.password){
            console.log("login successful!")
            this.state.loginResult = 1
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