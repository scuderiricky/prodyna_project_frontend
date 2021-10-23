import { loadImage } from "../utils/ImageHelper.js";

test('checks whether a valid city name returns a valid image url ', async () => {
 let validUrl = await loadImage("bern");
 expect(validUrl.cityImageUrl).not.toBeNull();
});

test('checks whether an invalid city name returns an invalid image url ', async () => {

    let validUrl = await loadImage("ber123n");  
    expect(validUrl.cityImageUrl).toBeNull();

    let validUrl2 = await loadImage("");  
    expect(validUrl2.cityImageUrl).toBeNull();

    let validUrl3 = await loadImage(null);  
    expect(validUrl3.cityImageUrl).toBeNull();
   });