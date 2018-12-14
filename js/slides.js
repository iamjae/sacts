
// Start origin
var slider = 0;

// An array of images
var images = [];

// Timing function
var time = 4000;

// Image List

images[0] = 'NGO Images/slide_1.png';
images[1] = 'NGO Images/slide_2.png';
images[2] = 'NGO Images/slide_3.png';
images[3] = 'NGO Images/slide_4.png';
images[4] = 'NGO Images/slide_5.png';
images[5] = 'NGO Images/slide_6.png';
images[6] = 'NGO Images/slide_7.png';
images[7] = 'NGO Images/slide_8.png';
images[8] = 'NGO Images/slide_9.png';
images[9] = 'NGO Images/slide_10.png';
images[10] = 'NGO Images/slide_11.png';
images[11] = 'NGO Images/slide_12.png';
images[12] = 'NGO Images/slide_13.png';
images[13] = 'NGO Images/slide_14.png';
images[14] = 'NGO Images/slide_15.png';
images[15] = 'NGO Images/slide_16.png';
images[16] = 'NGO Images/slide_17.png';
images[17] = 'NGO Images/slide_18.png';




//Function for image slides






function changeImage(){
    document.images.src = images[slider];
    if (slider < images.length - 1){
        slider++;
    }
    else {
        slider = 0;
    };

    setTimeout(changeImage, time);
    
}

window.onload = changeImage;



