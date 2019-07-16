<template>
    <Page>
        <ActionBar title="YOSHITADA HIGASHIOKA" android:flat="true"/>
        <TabView android:tabBackgroundColor="#53ba82"
                 android:tabTextColor="#c4ffdf"
                 android:selectedTabTextColor="#ffffff"
                 androidSelectedTabHighlightColor="#ffffff">
            <TabViewItem title="Expenses">
                <GridLayout columns="*" rows="*">
                    <ListView class="asd" for="item in listOfItems" @itemTap="onItemTap">
                        <v-template>
                            <Label :text="item.text" />
                        </v-template>
                    </ListView>
                </GridLayout>
            </TabViewItem>
            <TabViewItem title="Tab 2">
                <GridLayout columns="*" rows="*">
                    <Label class="message" :text="msg" col="0" row="0"/>
                </GridLayout>
            </TabViewItem>
            <TabViewItem title="Wishlist">
                <GridLayout columns="*" rows="*">
                    <ListView class="asd" for="item in wishlistedItems">
                        <v-template>
                            <Label :text="item.text" />
                        </v-template>
                    </ListView>
                </GridLayout>
            </TabViewItem>
        </TabView>
    </Page>
</template>

<script >
  export default {
    data() {
      return {
        msg: 'Hello World!',
        listOfItems: [
            { text: "June 8, 2019" },
            { text: "June 9, 2019" },
            { text: "June 10, 2019" }
        ],
        wishlistedItems: [
            { text: "Pokemon Black" },
            { text: "Pokemon Red" },
            { text: "Pokemon Blue" }
        ]
      }
    },
    methods: {
        onItemTap(){

        }
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }
    .asd {
        font-size: 30;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
