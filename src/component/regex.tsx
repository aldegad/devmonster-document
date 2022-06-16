export const regex = {
    replace: {
        price: (number:string | number) => {
            let sNumber = String(number);
            let sNumber_2 = [];
            if(sNumber.indexOf('.') != -1){
              sNumber_2 = sNumber.split('.');
              let str = sNumber_2[0].replace(/[^0-9]/g, '');
              let price = str.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
              return sNumber.startsWith('-') ? '-' + price + '.' + sNumber_2[1] : price + '.' + sNumber_2[1];
            } else {
              let str = sNumber.replace(/[^0-9]/g, '');
              let price = str.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
              return sNumber.startsWith('-') ? '-' + price : price;
            }
        }
    }
}