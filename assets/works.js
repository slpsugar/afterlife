// const aleft = document.querySelector (".aleft");
        
// aleft.onclick=function () {
// 	document.querySelector (".grid").scrollLeft -=1500;
// }

// const aright = document.querySelector (".aright");

// aright.onclick=function () {
// 	document.querySelector (".grid").scrollLeft +=1500;
// }



var img001 = document.getElementById("img001");
var row1 = document.getElementById("row-1");
var full001 = document.getElementById("full001");

var img002 = document.getElementById("img002");
var row2 = document.getElementById("row-2");
var full002 = document.getElementById("full002");

var img003 = document.getElementById("img003");
var row3 = document.getElementById("row-3");
var full003 = document.getElementById("full003");

var img004 = document.getElementById("img004");
var row4 = document.getElementById("row-4");
var full004 = document.getElementById("full004");

var img005 = document.getElementById("img005");
var row5 = document.getElementById("row-5");
var full005 = document.getElementById("full005");

var img006 = document.getElementById("img006");
var row6 = document.getElementById("row-6");
var full006 = document.getElementById("full006");

var img007 = document.getElementById("img007");
var row7 = document.getElementById("row-7");
var full007 = document.getElementById("full007");

var img008 = document.getElementById("img008");
var row8 = document.getElementById("row-8");
var full008 = document.getElementById("full008");

var img009 = document.getElementById("img009");
var row9 = document.getElementById("row-9");
var full009 = document.getElementById("full009");

var img010 = document.getElementById("img010");
var row10 = document.getElementById("row-10");
var full010 = document.getElementById("full010");

var img011 = document.getElementById("img011");
var row11 = document.getElementById("row-11");
var full011 = document.getElementById("full011");

var img012 = document.getElementById("img012");
var row12 = document.getElementById("row-12");
var full012 = document.getElementById("full012");

var img013 = document.getElementById("img013");
var row13 = document.getElementById("row-13");
var full013 = document.getElementById("full013");

var img014 = document.getElementById("img014");
var row14 = document.getElementById("row-14");
var full014 = document.getElementById("full014");

var img015 = document.getElementById("img015");
var row15 = document.getElementById("row-15");
var full015 = document.getElementById("full015");

var img016 = document.getElementById("img016");
var row16 = document.getElementById("row-16");
var full016 = document.getElementById("full016");

var img017 = document.getElementById("img017");
var row17 = document.getElementById("row-17");
var full017 = document.getElementById("full017");

var img018 = document.getElementById("img018");
var row18 = document.getElementById("row-18");
var full018 = document.getElementById("full018");

var img019 = document.getElementById("img019");
var row19 = document.getElementById("row-19");
var full019 = document.getElementById("full019");

var img020 = document.getElementById("img020");
var row20 = document.getElementById("row-20");
var full020 = document.getElementById("full020");

var img021 = document.getElementById("img021");
var row21 = document.getElementById("row-21");
var full021 = document.getElementById("full021");

var img022 = document.getElementById("img022");
var row22 = document.getElementById("row-22");
var full022 = document.getElementById("full022");

var img023 = document.getElementById("img023");
var row23 = document.getElementById("row-23");
var full023 = document.getElementById("full023");

var img024 = document.getElementById("img024");
var row24 = document.getElementById("row-24");
var full024 = document.getElementById("full024");

var img025 = document.getElementById("img025");
var row25 = document.getElementById("row-25");
var full025 = document.getElementById("full025");

var img026 = document.getElementById("img026");
var row26 = document.getElementById("row-26");
var full026 = document.getElementById("full026");

var img027 = document.getElementById("img027");
var row27 = document.getElementById("row-27");
var full027 = document.getElementById("full027");

var img028 = document.getElementById("img028");
var row28 = document.getElementById("row-28");
var full028 = document.getElementById("full028");

var img029 = document.getElementById("img029");
var row29 = document.getElementById("row-29");
var full029 = document.getElementById("full029");

var img030 = document.getElementById("img030");
var row30 = document.getElementById("row-30");
var full030 = document.getElementById("full030");

var img031 = document.getElementById("img031");
var row31 = document.getElementById("row-31");
var full031 = document.getElementById("full031");

var img032 = document.getElementById("img032");
var row32 = document.getElementById("row-32");
var full032 = document.getElementById("full032");

var img033 = document.getElementById("img033");
var row33 = document.getElementById("row-33");
var full033 = document.getElementById("full033");

var img034 = document.getElementById("img034");
var row34 = document.getElementById("row-34");
var full034 = document.getElementById("full034");


var init = () => {
	img001.style.opacity = '0'; 
	img002.style.opacity = '0';
	img003.style.opacity = '0';
	img004.style.opacity = '0';
	img005.style.opacity = '0';
	img006.style.opacity = '0';
	img007.style.opacity = '0';
	img008.style.opacity = '0';
	img009.style.opacity = '0';
	img010.style.opacity = '0';
	img011.style.opacity = '0';
	img012.style.opacity = '0';
	img013.style.opacity = '0';
	img014.style.opacity = '0';
	img015.style.opacity = '0';
	img016.style.opacity = '0';
	img017.style.opacity = '0';
	img018.style.opacity = '0';
	img019.style.opacity = '0';
	img020.style.opacity = '0';
	img021.style.opacity = '0';
	img022.style.opacity = '0';
	img023.style.opacity = '0';
	img024.style.opacity = '0';
	img025.style.opacity = '0';
	img026.style.opacity = '0';
	img027.style.opacity = '0';
	img028.style.opacity = '0';
	img029.style.opacity = '0';
	img030.style.opacity = '0';
	img031.style.opacity = '0';
	img032.style.opacity = '0';
	img033.style.opacity = '0';
	img034.style.opacity = '0';

	row1.addEventListener('mouseenter', () => {img001.style.opacity = '1';});
	row1.addEventListener('mouseleave', () => {img001.style.opacity = '0.15';});
	row1.addEventListener('click', () => {full001.style.display = 'flex';});
	full001.addEventListener('click', () => {full001.style.display = 'none';});

	row2.addEventListener('mouseenter', () => {img002.style.opacity = '1';});
	row2.addEventListener('mouseleave', () => {img002.style.opacity = '0.15';});
	row2.addEventListener('click', () => {full002.style.display = 'flex';});
	full002.addEventListener('click', () => {full002.style.display = 'none';});


	row3.addEventListener('mouseenter', () => {img003.style.opacity = '1';});
	row3.addEventListener('mouseleave', () => {img003.style.opacity = '0.15';});
	row3.addEventListener('click', () => {full003.style.display = 'flex';});
	full003.addEventListener('click', () => {full003.style.display = 'none';});

	row4.addEventListener('mouseenter', () => {img004.style.opacity = '1';});
	row4.addEventListener('mouseleave', () => {img004.style.opacity = '0.15';});
	row4.addEventListener('click', () => {full004.style.display = 'flex';});
	full004.addEventListener('click', () => {full004.style.display = 'none';});

	row5.addEventListener('mouseenter', () => {img005.style.opacity = '1';});
	row5.addEventListener('mouseleave', () => {img005.style.opacity = '0.15';});
	row5.addEventListener('click', () => {full005.style.display = 'flex';});
	full005.addEventListener('click', () => {full005.style.display = 'none';});

	row6.addEventListener('mouseenter', () => {img006.style.opacity = '1';});
	row6.addEventListener('mouseleave', () => {img006.style.opacity = '0.15';});
	row6.addEventListener('click', () => {full006.style.display = 'flex';});
	full006.addEventListener('click', () => {full006.style.display = 'none';});

	row7.addEventListener('mouseenter', () => {img007.style.opacity = '1';});
	row7.addEventListener('mouseleave', () => {img007.style.opacity = '0.15';});
	row7.addEventListener('click', () => {full007.style.display = 'flex';});
	full007.addEventListener('click', () => {full007.style.display = 'none';});

	row8.addEventListener('mouseenter', () => {img008.style.opacity = '1';});
	row8.addEventListener('mouseleave', () => {img008.style.opacity = '0.15';});
	row8.addEventListener('click', () => {full008.style.display = 'flex';});
	full008.addEventListener('click', () => {full008.style.display = 'none';});

	row9.addEventListener('mouseenter', () => {img009.style.opacity = '1';});
	row9.addEventListener('mouseleave', () => {img009.style.opacity = '0.15';});
	row9.addEventListener('click', () => {full009.style.display = 'flex';});
	full009.addEventListener('click', () => {full009.style.display = 'none';});

	row10.addEventListener('mouseenter', () => {img010.style.opacity = '1';});
	row10.addEventListener('mouseleave', () => {img010.style.opacity = '0.15';});
	row10.addEventListener('click', () => {full010.style.display = 'flex';});
	full010.addEventListener('click', () => {full010.style.display = 'none';});

	row11.addEventListener('mouseenter', () => {img011.style.opacity = '1';});
	row11.addEventListener('mouseleave', () => {img011.style.opacity = '0.15';});
	row11.addEventListener('click', () => {full011.style.display = 'flex';});
	full011.addEventListener('click', () => {full011.style.display = 'none';});

	row12.addEventListener('mouseenter', () => {img012.style.opacity = '1';});
	row12.addEventListener('mouseleave', () => {img012.style.opacity = '0.15';});
	row12.addEventListener('click', () => {full012.style.display = 'flex';});
	full012.addEventListener('click', () => {full012.style.display = 'none';});

	row13.addEventListener('mouseenter', () => {img013.style.opacity = '1';});
	row13.addEventListener('mouseleave', () => {img013.style.opacity = '0.15';});
	row13.addEventListener('click', () => {full013.style.display = 'flex';});
	full013.addEventListener('click', () => {full013.style.display = 'none';});

	row14.addEventListener('mouseenter', () => {img014.style.opacity = '1';});
	row14.addEventListener('mouseleave', () => {img014.style.opacity = '0.15';});
	row14.addEventListener('click', () => {full014.style.display = 'flex';});
	full014.addEventListener('click', () => {full014.style.display = 'none';});

	row15.addEventListener('mouseenter', () => {img015.style.opacity = '1';});
	row15.addEventListener('mouseleave', () => {img015.style.opacity = '0.15';});
	row15.addEventListener('click', () => {full015.style.display = 'flex';});
	full015.addEventListener('click', () => {full015.style.display = 'none';});

	row16.addEventListener('mouseenter', () => {img016.style.opacity = '1';});
	row16.addEventListener('mouseleave', () => {img016.style.opacity = '0.15';});
	row16.addEventListener('click', () => {full016.style.display = 'flex';});
	full016.addEventListener('click', () => {full016.style.display = 'none';});

	row17.addEventListener('mouseenter', () => {img017.style.opacity = '1';});
	row17.addEventListener('mouseleave', () => {img017.style.opacity = '0.15';});
	row17.addEventListener('click', () => {full017.style.display = 'flex';});
	full017.addEventListener('click', () => {full017.style.display = 'none';});

	row18.addEventListener('mouseenter', () => {img018.style.opacity = '1';});
	row18.addEventListener('mouseleave', () => {img018.style.opacity = '0.15';});
	row18.addEventListener('click', () => {full018.style.display = 'flex';});
	full018.addEventListener('click', () => {full018.style.display = 'none';});

	row19.addEventListener('mouseenter', () => {img019.style.opacity = '1';});
	row19.addEventListener('mouseleave', () => {img019.style.opacity = '0.15';});
	row19.addEventListener('click', () => {full019.style.display = 'flex';});
	full019.addEventListener('click', () => {full019.style.display = 'none';});

	row20.addEventListener('mouseenter', () => {img020.style.opacity = '1';});
	row20.addEventListener('mouseleave', () => {img020.style.opacity = '0.15';});
	row20.addEventListener('click', () => {full020.style.display = 'flex';});
	full020.addEventListener('click', () => {full020.style.display = 'none';});

	row21.addEventListener('mouseenter', () => {img021.style.opacity = '1';});
	row21.addEventListener('mouseleave', () => {img021.style.opacity = '0.15';});
	row21.addEventListener('click', () => {full021.style.display = 'flex';});
	full021.addEventListener('click', () => {full021.style.display = 'none';});

	row22.addEventListener('mouseenter', () => {img022.style.opacity = '1';});
	row22.addEventListener('mouseleave', () => {img022.style.opacity = '0.15';});
	row22.addEventListener('click', () => {full022.style.display = 'flex';});
	full022.addEventListener('click', () => {full022.style.display = 'none';});

	row23.addEventListener('mouseenter', () => {img023.style.opacity = '1';});
	row23.addEventListener('mouseleave', () => {img023.style.opacity = '0.15';});
	row23.addEventListener('click', () => {full023.style.display = 'flex';});
	full023.addEventListener('click', () => {full023.style.display = 'none';});
	
	row24.addEventListener('mouseenter', () => {img024.style.opacity = '1';});
	row24.addEventListener('mouseleave', () => {img024.style.opacity = '0.15';});
	row24.addEventListener('click', () => {full024.style.display = 'flex';});
	full024.addEventListener('click', () => {full024.style.display = 'none';});

	row25.addEventListener('mouseenter', () => {img025.style.opacity = '1';});
	row25.addEventListener('mouseleave', () => {img025.style.opacity = '0.15';});
	row25.addEventListener('click', () => {full025.style.display = 'flex';});
	full025.addEventListener('click', () => {full025.style.display = 'none';});

	row26.addEventListener('mouseenter', () => {img026.style.opacity = '1';});
	row26.addEventListener('mouseleave', () => {img026.style.opacity = '0.15';});
	row26.addEventListener('click', () => {full026.style.display = 'flex';});
	full026.addEventListener('click', () => {full026.style.display = 'none';});

	row27.addEventListener('mouseenter', () => {img027.style.opacity = '1';});
	row27.addEventListener('mouseleave', () => {img027.style.opacity = '0.15';});
	row27.addEventListener('click', () => {full027.style.display = 'flex';});
	full027.addEventListener('click', () => {full027.style.display = 'none';});

	row28.addEventListener('mouseenter', () => {img028.style.opacity = '1';});
	row28.addEventListener('mouseleave', () => {img028.style.opacity = '0.15';});
	row28.addEventListener('click', () => {full028.style.display = 'flex';});
	full028.addEventListener('click', () => {full028.style.display = 'none';});

	row29.addEventListener('mouseenter', () => {img029.style.opacity = '1';});
	row29.addEventListener('mouseleave', () => {img029.style.opacity = '0.15';});
	row29.addEventListener('click', () => {full029.style.display = 'flex';});
	full029.addEventListener('click', () => {full029.style.display = 'none';});

	row30.addEventListener('mouseenter', () => {img030.style.opacity = '1';});
	row30.addEventListener('mouseleave', () => {img030.style.opacity = '0.15';});
	row30.addEventListener('click', () => {full030.style.display = 'flex';});
	full030.addEventListener('click', () => {full030.style.display = 'none';});

	row31.addEventListener('mouseenter', () => {img031.style.opacity = '1';});
	row31.addEventListener('mouseleave', () => {img031.style.opacity = '0.15';});
	row31.addEventListener('click', () => {full031.style.display = 'flex';});
	full031.addEventListener('click', () => {full031.style.display = 'none';});

	row32.addEventListener('mouseenter', () => {img032.style.opacity = '1';});
	row32.addEventListener('mouseleave', () => {img032.style.opacity = '0.15';});
	row32.addEventListener('click', () => {full032.style.display = 'flex';});
	full032.addEventListener('click', () => {full032.style.display = 'none';});

	row33.addEventListener('mouseenter', () => {img033.style.opacity = '1';});
	row33.addEventListener('mouseleave', () => {img033.style.opacity = '0.15';});
	row33.addEventListener('click', () => {full033.style.display = 'flex';});
	full033.addEventListener('click', () => {full033.style.display = 'none';});

	row34.addEventListener('mouseenter', () => {img034.style.opacity = '1';});
	row34.addEventListener('mouseleave', () => {img034.style.opacity = '0.15';});
	row34.addEventListener('click', () => {full034.style.display = 'flex';});
	full034.addEventListener('click', () => {full034.style.display = 'none';});
};
init();


