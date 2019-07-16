<template>
  <Page>
    <ActionBar android:backgroundColor="#53ba82" title="YOSHITADA HIGASHIOKA" android:flat="true"></ActionBar>

    <TabView
      android:tabBackgroundColor="#53ba82"
      android:tabTextColor="#c4ffdf"
      android:selectedTabTextColor="#ffffff"
      androidSelectedTabHighlightColor="#ffffff"
    >
      <TabViewItem title="Expenses">
        <GridLayout columns="*" rows="*">
          <!-- <ListView for="item in listOfItems">
            <v-template>
              <Label :text="item.text" />
            </v-template>
          </ListView> -->
          <ListView for="person in $store.state.data" class="list-group" row="1" col="0">
              <v-template>
                <StackLayout class="list-group-item">
                  <Label class="dataLoaded" v-bind:text="person.firstname + ' ' + person.lastname" />
                </StackLayout>
              </v-template>
            </ListView>
        </GridLayout>
      </TabViewItem>
      <TabViewItem title="Tab 2">
        <GridLayout columns="*" rows="*">
          <Label class="message" :text="msg" col="0" row="0" />
        </GridLayout>
      </TabViewItem>
      <TabViewItem title="Wishlist">
        <GridLayout columns="*" rows="*">
          <GridLayout rows="auto, *" columns="*">
            <StackLayout class="form" row="0" col="0">
              <StackLayout class="input-field">
                <Label text="Sample" class="label font-weight-bold m-b-5" />
                <TextField class="input" v-model="input.firstname" />
                <StackLayout class="hr-light"></StackLayout>
              </StackLayout>
              <StackLayout class="input-field">
                <Label text="Sample" class="label font-weight-bold m-b-5" />
                <TextField class="input" v-model="input.lastname" />
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
                  <Label class="dataLoaded" v-bind:text="person.firstname + ' ' + person.lastname" />
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
export default {
  data() {
    return {
      input: {
        firstname: "",
        lastname: ""
      },
      listOfItems: [
        { text: "June 8, 2019" },
        { text: "June 9, 2019" },
        { text: "June 10, 2019" }
      ]
    };
  },
  methods: {
    save() {
      this.$store.dispatch("insert", this.input);
    },
    load() {
      this.$store.dispatch("query");
    },
    clear() {
      this.input.firstname = "";
      this.input.lastname = "";
    },
    deleteDbFunc() {
      this.$store.dispatch("deleteDb");
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
