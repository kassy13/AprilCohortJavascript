// console.log('hello world');
// // alert('ordering rice2') //blocking or syncronous in nature
// setTimeout(() => {
//     console.log('hello from set timeout');
// }, 5000)
// console.log('hello world2');
// console.log('hello world3');

// // let semo = ""
// // function orderFoodDelivery() {
// //     console.log('order food delivery');
// //     setTimeout(() => {
// //         semo = 'Two wraps of semo with egusi'
// //         console.log(`${semo} is ready`);
// //     }, 2000);
// // }
// // orderFoodDelivery(); //2 seconds meaning before that 2 seconds we dont know the value of semo
// // console.log('watch some tiktok videos ');

// // function eatDeliveredFood() {
// //     console.log(`Eat the ${semo}`);
// // }
// // eatDeliveredFood()





// // function orderFoodDelivery(callback) {
// //     setTimeout(() => {
// //         const semo = 'Two wraps of semo with egusi'
// //         callback(semo)
// //         //eatdelivered
// //     }, 2000);

// // }


// // function eatDeliveredFood(food) {
// //     console.log(`Eat the ${food}`);
// // }
// // orderFoodDelivery(eatDeliveredFood)

// // PROMISES 
// // let successful = true
// // function orderFoodDeliveryPromise() {
// //     return new Promise((resolve, reject) => {

// //         if (!successful) {

// //             resolve('this is resolved')

// //             // if (resolve) {
// //             //     resolve('this is resolved')
// //             // } else {
// //             //     reject('an error occured')
// //             // }
// //         } else {
// //             reject('an error occured')
// //         }
// //     })


// // }
// // const receiverOfPromise = orderFoodDeliveryPromise()
// // console.log(receiverOfPromise);
// // receiverOfPromise.then((data) => {
// //     console.log(data);
// // }).then(rejected => {
// //     console.log(rejected);
// // }).catch(err => {
// //     console.log(err);
// // })

// function orderFoodDeliveryPromiseAsync() {
//     return new Promise((resolve, reject) => {
//         //by default we will get a promise of pending till we resolve our promise

//         if (resolve) {
//             resolve('success')
//         } else {
//             reject('failed')
//         }

//     })


// }



// async function handleDeliveryAsync() {
//     try {
//         const data = await orderFoodDeliveryPromiseAsync()
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }

// }
// handleDeliveryAsync();

async function fetchData() {

    try {
        const dataFetced = await fetch('https://jsonplaceholder.typicode.com/posts')
        console.log(dataFetced);
        const result = await dataFetced.json()
        console.log(result);
        const showpostSection = document.createElement('section');
        result.forEach((post) => {
            const postElement = document.createElement('div')
            const postHead = document.createElement('h1')
            postHead.textContent = post.title
            const postPara = document.createElement('p')
            postPara.textContent = post.body
            postElement.append(postHead)
            postElement.append(postPara)
            showpostSection.append(postElement)
        })
        document.body.append(showpostSection)

    }
    catch (err) {
        console.log(err);
    }
}
fetchData()
