<template>
  <Page>
    <ActionBar android:backgroundColor="#53ba82" title="YOSHITADA HIGASHIOKA"></ActionBar>

    <TabView
      android:tabBackgroundColor="#53ba82"
      android:tabTextColor="#c4ffdf"
      android:selectedTabTextColor="#ffffff"
      androidSelectedTabHighlightColor="#ffffff"
    >
      <TabViewItem title="Expenses">
        <GridLayout columns="*" rows="*">
          <ListView for="person in $store.state.data" @itemTap="onItemTap" class="list-group" row="1" col="0">
              <v-template>
                <StackLayout class="list-group-item">
                  <Label class="dataLoaded" v-bind:text="person.emailAddress + ' ' + person.password" />
                </StackLayout>
              </v-template>
            </ListView>
        </GridLayout>
      </TabViewItem>
      <!-- ObservableArray -->
      <TabViewItem title="Tab 2">
        <GridLayout columns="*" rows="*">
          <ListView for="item in itemList" @itemTap="wew" row="1" col="0">
              <v-template>
                <StackLayout>
                  <Label :text="item.name"></Label>
            <Label :text="item.description"></Label>
                </StackLayout>
              </v-template>
            </ListView>
        </GridLayout>
      </TabViewItem>
      <TabViewItem title="Wishlist">
        <GridLayout columns="*" rows="*">
          <GridLayout rows="auto, *" columns="*">
            <StackLayout class="form" row="0" col="0">
              <StackLayout class="input-field">
                <Label text="Sample" class="label font-weight-bold m-b-5" />
                <TextField class="input" v-model="input.emailAddress" />
                <StackLayout class="hr-light"></StackLayout>
              </StackLayout>
              <StackLayout class="input-field">
                <Label text="Sample" class="label font-weight-bold m-b-5" />
                <TextField class="input" v-model="input.password" />
                <StackLayout class="hr-light"></StackLayout>
              </StackLayout>
              <GridLayout rows="auto, auto" columns="*, *">
                <Button text="Save" @tap="save" class="btn btn-primary" row="0" col="0" />
                <Button text="Load" @tap="load" class="btn btn-primary" row="0" col="1" />
                <Button text="Clear" @tap="clear" class="btn btn-primary" row="1" col="0" />
                <Button text="Delete" @tap="deleteDbFunc" class="btn btn-primary" row="1" col="1" />
              </GridLayout>
            </StackLayout>
            <ListView for="person in $store.state.data" class="list-group" row="1" col="0">
              <v-template>
                <StackLayout class="list-group-item">
                  <Label class="dataLoaded" v-bind:text="person.emailAddress + ' ' + person.password" />
                </StackLayout>
              </v-template>
            </ListView>
          </GridLayout>
        </GridLayout>
      </TabViewItem>
    </TabView>
  </Page>
</template>

<script>
import { ObservableArray } from 'tns-core-modules/data/observable-array';

const Toast = require('nativescript-toast');

export default {
  data() {
    return {
      input: {
        emailAddress: "",
        password: ""
      },
      listOfItems: [
        { text: "June 8, 2019" },
        { text: "June 9, 2019" },
        { text: "June 10, 2019" }
      ],
      msg: "Hello",
      itemList: new ObservableArray([
        {name: 'Item 1', description: 'Item 1 description'},
        {name: 'Item 2', description: 'Item 2 description'},
        {name: 'Item 3', description: 'Item 3 description'},
      ]),

    };
  },
  methods: {
    wew({item}) {
      console.log(`Tapped on ${item.name}`);
    },
    save() {
      this.$store.dispatch("insert", this.input);
    },
    load() {
      this.$store.dispatch("query");
    },
    clear() {
      this.input.emailAddress = "";
      this.input.password = "";
    },
    deleteDbFunc() {
      this.$store.dispatch("deleteDb");
    },
    onItemTap(event) {
        
    }
  },
  beforeMount(){
      this.load()
  }
};
</script>

<style scoped>
.dataLoaded {
  font-size: 20;
}
</style>