var app = new Vue({
    el: '#app',
    data: {
        itemList: [
            {
                id: '0',
                itemName: 'Intel i3-12100 4核8緒/3.3GHz(4.3)/1700腳位/含內顯/CPU處理器',
                imgUrl: 'I3.png',
                price: '4350',
                count: '1'
            },
            {
                id: '1',
                itemName: 'Intel I5-12400 6核12緒/2.5GHz(4.4)/1700腳位/含內顯/CPU處理器',
                imgUrl: 'I5.png',
                price: '6299',
                count: '1'
            },
            {
                id: '2',
                itemName: 'Intel I5-12400F 6核12緒/2.5GHz(4.4)/1700腳位/無內顯/CPU處理器',
                imgUrl: 'I5.png',
                price: '5599',
                count: '1'
            },
            {
                id: '3',
                itemName: 'Intel I5-12600K 10核16緒/3.7GHz/1700腳位/含內顯/CPU處理器',
                imgUrl: 'I5.png',
                price: '9288',
                count: '1'
            },
            {
                id: '4',
                itemName: 'Intel I7-12700 12核20緒/2.1GHz/1700腳位/含內顯/CPU處理器',
                imgUrl: 'I7.png',
                price: '10890',
                count: '1'
            },
            {
                id: '5',
                itemName: 'Intel I7-12700F 12核20緒/2.1GHz/1700腳位/無內顯/CPU處理器',
                imgUrl: 'I7.png',
                price: '10288',
                count: '1'
            },
            {
                id: '6',
                itemName: 'Intel I7-12700K 12核20緒/2.1GHz/1700腳位/含內顯/CPU處理器',
                imgUrl: 'I7.png',
                price: '12950',
                count: '1'
            },
            {
                id: '7',
                itemName: 'Intel I9-12900K 16核24緒/3.2GHz/1700腳位/含內顯/CPU處理器',
                imgUrl: 'I9.png',
                price: '18290',
                count: '1'
            },

        ]
    },
    methods: {
        handlePlus: function (item) {
            item.count++;
        },
        handleSub: function (item) {
            if (item.count > 1) {
                item.count--;
            }
        },
        handledelete: function (index) {
            console.log(this);
            this.itemList.splice(index, 1);
        }
    },
    computed: {

    }
})