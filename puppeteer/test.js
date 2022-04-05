const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-ddaedfbeaebcbfbdaefeafebdefeacfed.examlyiopb.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
      await page.click('#signupLink');
      await page.waitForNavigation();
      await page.type('#email', 'test@gmail.com');
      await page.type('#username', 'testuser');
      await page.type('#mobileNumber', '9876543210');
      await page.type('#password', 'Test@123');
      await page.type('#confirmPassword', 'Test@123');
      await page.click('#submitButton');
      await page.waitForNavigation();
      await page.waitForSelector('#loginBox',{timeout:3000});
      console.log('TESTCASE:FE_Signup:success');
    }
     catch(e){
      console.log('TESTCASE:FE_Signup:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
})();

 

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-ddaedfbeaebcbfbdaefeafebdefeacfed.examlyiopb.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
      await page.type('#email', 'test@gmail.com');
      await page.type('#password', 'Test@123');
      await page.click('#loginButton');
      await page.waitForNavigation();
      await page.waitForSelector('#homeButton',{timeout:3000});
      console.log('TESTCASE:FE_login:success');
    }
     catch(e){
      console.log('TESTCASE:FE_login:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
})();

 

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-ddaedfbeaebcbfbdaefeafebdefeacfed.examlyiopb.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.type('#email', 'test@gmail.com');
    await page.type('#password', 'Test@123');
    await page.click('#loginButton');
      await page.waitForNavigation();
      await page.waitForSelector('#homeButton',{timeout:3000});
      await page.click('#cartButton');
      await page.waitForSelector('#cartPage',{timeout:3000});
      await page.click('#myOrdersButton');
      await page.waitForSelector('#myOrderPage',{timeout:3000});
      await page.click('#logoutButton');
      await page.waitForSelector('#loginBox',{timeout:3000});
      console.log('TESTCASE:FE_userOperation:success');
    }
     catch(e){
      console.log('TESTCASE:FE_userOperation:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
  await page.goto('https://8081-ddaedfbeaebcbfbdaefeafebdefeacfed.examlyiopb.examly.io/');
  await page.setViewport({
    width:1200,
    height:800,
  })
    await page.type('#email', 'admin@gmail.com');
    await page.type('#password', 'Admin@123');
    await page.click('#loginButton');
    await page.waitForNavigation();
    await page.waitForSelector('#adminHome',{timeout:3000});
    await page.click('#addProductButton');
    await page.waitForSelector('#addProduct',{timeout:3000});
    await page.type('#enterProductName', 'friedrice');
    await page.type('#enterPrice', '150');
    await page.type('#enterDescription', 'delicious food');
    await page.type('#enterImageurl', 'friedriceImage.com');
    await page.type('#enterQuantity', '25');
    await page.click('#addButton');
    await page.waitForSelector('#adminHome',{timeout:3000});
    console.log('TESTCASE:FE_admin_addProduct:success');
  }
   catch(e){
    console.log('TESTCASE:FE_admin_addProduct:failure');
  }finally{
    await page.close();
    await browser.close();
  }
  
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
  await page.goto('https://8081-ddaedfbeaebcbfbdaefeafebdefeacfed.examlyiopb.examly.io/');
  await page.setViewport({
    width:1200,
    height:800,
  })
    await page.type('#email', 'admin@gmail.com');
    await page.type('#password', 'Admin@123');
    await page.click('#loginButton');
    await page.waitForNavigation();
    await page.waitForSelector('#adminHome',{timeout:3000});
    await page.click('#editFood1');
    await page.waitForSelector('#updateProduct',{timeout:3000});
    await page.type('#enterProductName', 'friedrice');
    await page.type('#enterPrice', '150');
    await page.type('#enterDescription', 'delicious food');
    await page.type('#enterImageurl', 'friedriceImage.com');
    await page.type('#enterQuantity', '30');
    await page.click('#updateButton');
    await page.waitForSelector('#adminHome',{timeout:3000});
    await page.click('#viewOrdersButton');
    await page.waitForSelector('#adminOrders',{timeout:3000});
    console.log('TESTCASE:FE_admin_updateProduct:success');
  }
   catch(e){
    console.log('TESTCASE:FE_admin_updateProduct:failure');
  }finally{
    await page.close();
    await browser.close();
  }
  
})();