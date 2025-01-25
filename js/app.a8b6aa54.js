(function(){"use strict";var t={4016:function(t,e,a){a.d(e,{A:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"statc_main"},[e("div",{staticClass:"nav_logos"},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"route_logo"},[e("div",[e("img",{attrs:{src:a(7503),alt:""}})]),e("div",{staticClass:"logo_title"},[t._v(" O‘zbekiston Respublikasi maktabgacha va maktab ta'limi vazirligi ")])])])],1),e("div",{staticClass:"language-switcher"},[e("div",{staticClass:"language",on:{click:t.toggleLanguageDropdown}},[e("span",{staticClass:"icon"},[t._v("🌍")]),e("span",{staticClass:"text"},[t._v(t._s(t.selectedLanguage))]),e("span",{staticClass:"arrow"},[t._v("▼")])]),t.showLanguageDropdown?e("div",{staticClass:"dropdown"},t._l(t.languages,(function(a){return e("div",{key:a,staticClass:"dropdown-item",on:{click:function(e){return t.selectLanguage(a)}}},[t._v(" "+t._s(a)+" ")])})),0):t._e(),e("div",{staticClass:"dark-mode-toggle",on:{click:t.toggleDarkMode}},[e("div",{class:["toggle",{active:t.isDarkMode}]},[e("span",{staticClass:"icon"},[t._v("🌙")])])])])]),t._m(0)])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"statis_section"},[e("div",{staticClass:"statis_title"},[t._v(" O‘quvchilarning kasb tanlash statistikasi ")])])}],n={data(){return{languages:["O'zbek tili","Русский"],selectedLanguage:"O'zbek tili",showLanguageDropdown:!1,isDarkMode:!1,tabs:["Grafik ko‘rinish","Jadval ko‘rinish"],filters:["So‘rovnoma","Temperament","Qobiliyat","Kasbga moyillik","Fanlar va sohalarga qiziqish"],dropdownFilters:["Viloyat","Tuman","Maktab","Sinf"],activeTab:0,activeFilter:0}},methods:{selectDropdown(t){alert(`${this.dropdownFilters[t]} tanlandi`)},toggleLanguageDropdown(){this.showLanguageDropdown=!this.showLanguageDropdown},selectLanguage(t){this.selectedLanguage=t,this.showLanguageDropdown=!1},toggleDarkMode(){this.isDarkMode=!this.isDarkMode,document.body.classList.toggle("dark-mode",this.isDarkMode)}}},o=n,r=a(1656),l=(0,r.A)(o,s,i,!1,null,"4e5da307",null),c=l.exports},3229:function(t,e,a){var s=a(6848),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},n=[],o=a(1656),r={},l=(0,o.A)(r,i,n,!1,null,null,null),c=l.exports,d=a(4458);(0,d.k)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var u=a(6178),_=(a(4114),a(1454),function(){var t=this,e=t._self._c;return e("div",[e("HeaderComp"),e("section",[e("div",{staticClass:"statistics-container"},[e("div",[e("div",{staticClass:"tab_mains"},[e("button",{class:{active:1==t.grafick},on:{click:function(e){t.grafick=1}}},[t._v(" Grafik ko'rinishi ")]),e("button",{class:{active:2==t.grafick},on:{click:function(e){t.grafick=2}}},[t._v(" Jadval ko'rinishi ")])])]),e("div",{staticClass:"main_tabs_test"},[e("button",{class:{active:"questionnaire_for_9"==t.tab_choose},on:{click:function(e){t.tab_choose="questionnaire_for_9",t.$router.push("/")}}},[t._v(" So'rovnoma 9-sinf ")]),e("button",{class:{active:"questionnaire_for_10"==t.tab_choose},on:{click:function(e){t.tab_choose="questionnaire_for_10",t.$router.push("/questionnaire_for_10")}}},[t._v(" So'rovnoma 10-sinf ")]),e("button",{class:{active:"questionnaire_for_11"==t.tab_choose},on:{click:function(e){t.tab_choose="questionnaire_for_11",t.$router.push("/questionnaire_for_11")}}},[t._v(" So'rovnoma 11-sinf ")]),e("button",{class:{active:"temperament_type_test"==t.tab_choose},on:{click:function(e){t.tab_choose="temperament_type_test",t.$router.push("/temperament_type_test")}}},[t._v(" Temperament ")]),e("button",{class:{active:"petrushin_determine_of_ability"==t.tab_choose},on:{click:function(e){t.tab_choose="petrushin_determine_of_ability",t.$router.push("/petrushin_determine_of_ability")}}},[t._v(" Qobiliyatni aniqlash ")]),e("button",{class:{active:"vocational_aptitude_questionnaire"==t.tab_choose},on:{click:function(e){t.tab_choose="vocational_aptitude_questionnaire",t.$router.push("/vocational_aptitude_questionnaire")}}},[t._v(" Kasbga moyillikni aniqlash ")]),e("button",{class:{active:"interest_map"==t.tab_choose},on:{click:function(e){t.tab_choose="interest_map",t.$router.push("/interest_map")}}},[t._v(" Fanlar va sohalarga qiziqishni aniqlash ")]),e("button",{class:{active:"character_and_profession"==t.tab_choose},on:{click:function(e){t.tab_choose="character_and_profession",t.$router.push("/character_and_profession")}}},[t._v(" Xarakterni kasbga bog‘liqligini aniqlash ")]),e("button",{class:{active:"career_selection_matrix"==t.tab_choose},on:{click:function(e){t.tab_choose="career_selection_matrix",t.$router.push("/career_selection_matrix")}}},[t._v(" Kelajakdagi kasbni aniqlash ")]),e("button",{class:{active:"career_choice_motivation"==t.tab_choose},on:{click:function(e){t.tab_choose="career_choice_motivation",t.$router.push("/career_choice_motivation")}}},[t._v(" Kasb tanlashdagi motivatsiyani aniqlash ")])]),e("div",{staticClass:"filt_f"},[e("div",{staticClass:"filt_country"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.reg_parent_id,expression:"reg_parent_id"}],attrs:{id:"regionSelect",name:"regions"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.reg_parent_id=e.target.multiple?a:a[0]},function(e){return t.get_dist()}]}},t._l(t.data_regions.result,(function(a,s){return e("option",{key:s,domProps:{value:a.id}},[t._v(" "+t._s(a.nameuzlatn)+" ")])})),0),e("select",{directives:[{name:"model",rawName:"v-model",value:t.des_parent_id,expression:"des_parent_id"}],attrs:{id:"regionSelect",name:"regions"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.des_parent_id=e.target.multiple?a:a[0]},function(e){return t.get_org()}]}},t._l(t.data_dist.result,(function(a,s){return e("option",{key:s,domProps:{value:a.id}},[t._v(" "+t._s(a.nameuzlatn)+" ")])})),0),e("select",{directives:[{name:"model",rawName:"v-model",value:t.org_parent_id,expression:"org_parent_id"}],attrs:{id:"regionSelect",name:"regions"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.org_parent_id=e.target.multiple?a:a[0]},function(e){return t.getorgan_students()}]}},t._l(t.data_org.result,(function(a,s){return e("option",{key:s,domProps:{value:a.organizationid}},[t._v(" "+t._s(a.organizationfullname)+" ")])})),0),e("select",{directives:[{name:"model",rawName:"v-model",value:t.getstudents,expression:"getstudents"}],attrs:{id:"regionSelect",name:"regions"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.getstudents=e.target.multiple?a:a[0]},function(e){return t.getStatistics_students()}]}},[e("option",{attrs:{value:"9"}},[t._v("9-Sinf")]),e("option",{attrs:{value:"10"}},[t._v("10-Sinf")]),e("option",{attrs:{value:"11"}},[t._v("11-Sinf")])])]),e("div",{staticClass:"download_btn"},[e("svg",{attrs:{width:"13.333496",height:"16.667969",viewBox:"0 0 13.3335 16.668",fill:"none",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("desc",[t._v(" Created with Pixso. ")]),e("defs"),e("path",{attrs:{id:"Vector (Stroke)",d:"M2.5 1.66C2.27 1.66 2.06 1.75 1.91 1.91C1.75 2.06 1.66 2.27 1.66 2.5L1.66 14.16C1.66 14.38 1.75 14.6 1.91 14.75C2.06 14.91 2.27 15 2.5 15L10.83 15C11.05 15 11.26 14.91 11.42 14.75C11.57 14.6 11.66 14.38 11.66 14.16L11.66 6.17L7.15 1.66L2.5 1.66ZM0.73 0.73C1.2 0.26 1.83 0 2.5 0L7.15 0C7.59 0 8.02 0.17 8.33 0.48L0.73 0.73ZM8.33 0.48L12.84 5C13.15 5.31 13.33 5.73 13.33 6.17L13.33 14.16C13.33 14.82 13.06 15.46 12.6 15.93C12.13 16.4 11.49 16.66 10.83 16.66L2.5 16.66C1.83 16.66 1.2 16.4 0.73 15.93C0.26 15.46 0 14.82 0 14.16L0 2.5C0 1.83 0.26 1.19 0.73 0.73L8.33 0.48ZM6.66 5.83C7.12 5.83 7.5 6.2 7.5 6.66L7.5 9.65L8.57 8.57C8.9 8.25 9.43 8.25 9.75 8.57C10.08 8.9 10.08 9.42 9.75 9.75L7.25 12.25C6.93 12.58 6.4 12.58 6.07 12.25L3.57 9.75C3.25 9.42 3.25 8.9 3.57 8.57C3.9 8.25 4.43 8.25 4.75 8.57L5.83 9.65L5.83 6.66C5.83 6.2 6.2 5.83 6.66 5.83Z",fill:"#292C30","fill-opacity":"1.000000","fill-rule":"evenodd"}})]),t._v(" Yuklab olish "),e("svg",{attrs:{width:"9.175781",height:"5.585938",viewBox:"0 0 9.17578 5.58594",fill:"none",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("desc",[t._v(" Created with Pixso. ")]),e("defs"),e("path",{attrs:{id:"Vector",d:"M3.88 5.29L0.29 1.7C-0.34 1.07 0.11 0 1 0L8.17 0C9.06 0 9.51 1.07 8.88 1.7L5.29 5.29C4.9 5.68 4.27 5.68 3.88 5.29Z",fill:"#292C30","fill-opacity":"1.000000","fill-rule":"nonzero"}})])])])])]),"questionnaire_for_9"==t.tab_choose&&1==t.grafick?e("div",{staticClass:"stats_chart"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-6"},[e("div",{staticClass:"crads_stats"},[e("h3",[t._v("Umumiy")]),e("div",{staticStyle:{display:"flex","margin-bottom":"20px"}},[e("div",{staticStyle:{"margin-right":"30px"}},[e("p",[t._v("Jami o'quvchilar")]),e("h2",[t._v(t._s(t.staticss1.total_students))])]),e("div",[e("p",[t._v("So'rovda qatnashganlar")]),e("h2",[t._v(t._s(t.staticss1.attended_students))])])]),e("apexchart",{attrs:{type:"bar",height:"170",options:t.chartOptions,series:t.series}})],1)]),e("div",{staticClass:"col-xl-6"},[e("div",{staticClass:"crads_stats"},[e("h3",[t._v("Jinsi")]),e("div",{staticStyle:{display:"flex","margin-bottom":"20px"}},[e("div",{staticStyle:{"margin-right":"30px"}},[e("p",[t._v("O‘g‘il bollar")]),e("h2",[t._v(t._s(t.staticss1.male_students))])]),e("div",[e("p",[t._v("Qiz bollar")]),e("h2",[t._v(t._s(t.staticss1.female_students))])])]),e("apexchart",{attrs:{type:"bar",height:"170",options:t.chartOptions1,series:t.series1}})],1)]),e("div",{staticClass:"col-xl-12 mt-4"},[e("div",{staticClass:"crads_stats"},[e("h3",[t._v("Respublika kesimida")]),e("apexchart",{attrs:{type:"bar",height:"444",options:t.chartOptions3,series:t.series3}})],1)])])]):t._e(),2==t.grafick?e("div",{staticClass:"table_data"},[e("div",{staticClass:"table-container"},[e("div",{staticClass:"tb_ff"},[e("table",{staticClass:"styled-table"},[e("thead",[e("tr",[e("th",[t._v("Foydalanuvchilar")]),e("th",[t._v("Jami o'quvchilar")]),e("th",[t._v("O'g'il")]),e("th",[t._v("Qiz")]),e("th",[t._v("So'rovnomada qatnashganlar")]),e("th",[t._v("O'g'il")]),e("th",[t._v("Qiz")]),t._l(t.questions,(function(a){return e("th",{key:a},[t._v(t._s(a))])}))],2)]),e("tbody",t._l(t.firstTableData,(function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.group))]),e("td",[t._v(t._s(a.totalStudents))]),e("td",[t._v(t._s(a.boys))]),e("td",[t._v(t._s(a.girls))]),e("td",[t._v(t._s(a.participants))]),e("td",[t._v(t._s(a.boyParticipants))]),e("td",[t._v(t._s(a.girlParticipants))]),t._l(a.answers,(function(a){return e("td",{key:a},[t._v(t._s(a))])}))],2)})),0)])]),e("div",{staticClass:"tb_ff"},[e("table",{staticClass:"styled-table"},[e("thead",[e("tr",[e("th",[t._v("#")]),e("th",[t._v("Viloyat nomi")]),e("th",[t._v("Jami o'quvchilar")]),e("th",[t._v("O'g'il")]),e("th",[t._v("Qiz")]),e("th",[t._v("So'rovnomada qatnashganlar")]),e("th",[t._v("O'g'il")]),e("th",[t._v("Qiz")]),t._l(t.questions,(function(a){return e("th",{key:a},[t._v(t._s(a))])}))],2)]),e("tbody",t._l(t.secondTableData,(function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.id))]),e("td",[t._v(t._s(a.region))]),e("td",[t._v(t._s(a.totalStudents))]),e("td",[t._v(t._s(a.boys))]),e("td",[t._v(t._s(a.girls))]),e("td",[t._v(t._s(a.participants))]),e("td",[t._v(t._s(a.boyParticipants))]),e("td",[t._v(t._s(a.girlParticipants))]),t._l(a.answers,(function(a){return e("td",{key:a},[t._v(t._s(a))])}))],2)})),0)])])])]):t._e()],1)}),h=[],g=(a(8992),a(3949),a(4016)),p=a(8923),v=a.n(p),f={components:{HeaderComp:g.A,apexchart:v()},data(){return{questions:["1-savol","2-savol","3-savol","4-savol","5-savol","6-savol","7-savol","8-savol","9-savol","10-savol"],firstTableData:[{id:1,group:"9-sinf",totalStudents:"",boys:"",girls:"",participants:"",boyParticipants:"",girlParticipants:"",answers:[]},{id:2,group:"11-sinf",totalStudents:"",boys:"",girls:"",participants:"",boyParticipants:"",girlParticipants:"",answers:[]}],secondTableData:[],staticss:[],grafick:1,getstudents:"9",des_parent_id:"",tab_choose:"questionnaire_for_9",series:[{name:"Jami o'quvchilar",data:[]},{name:"So'rovda qatnashganlar",data:[]}],chartOptions:{chart:{type:"bar",height:150,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0,barHeight:"16px"}},colors:["#FDB44B","#85D1F5"],dataLabels:{enabled:!1},xaxis:{categories:[""],labels:{formatter:function(t){return t+" 000"}}},yaxis:{show:!1},grid:{borderColor:"#f1f1f1"},legend:{position:"bottom",horizontalAlign:"center"}},series1:[{name:"Jami o'quvchilar",data:[]},{name:"So'rovda qatnashganlar",data:[]}],chartOptions1:{chart:{type:"bar",height:150,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0,barHeight:"16px"}},colors:["#17A7EE","#FF6182"],dataLabels:{enabled:!1},xaxis:{categories:[""],labels:{formatter:function(t){return t+" 000"}}},yaxis:{show:!1},grid:{borderColor:"#f1f1f1"},legend:{position:"bottom",horizontalAlign:"center"}},series3:[],staticss1:[],chartOptions3:{chart:{type:"bar",height:350,stacked:!0,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"45%",borderRadius:5}},colors:["#FDB44B","#85D1F5"],dataLabels:{enabled:!0,formatter:t=>`${t}K`},xaxis:{categories:[],labels:{style:{fontSize:"12px"}}},yaxis:{labels:{formatter:t=>`${t}K`}},grid:{borderColor:"#f1f1f1"},legend:{position:"bottom",horizontalAlign:"center"},tooltip:{y:{formatter:t=>`${t}K`}}},data_regions:[],data_dist:[],reg_parent_id:"",data_org:[],org_parent_id:"",typess:"questionnaire_for_9",table_datas:[]}},mounted(){this.$axios.get(`/test/statistics/students/?test_type=${this.tab_choose}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Accept-Language":"oz"}}).then((t=>{this.staticss1=t.data,this.staticss1=t.data,this.series=[{name:"Jami o'quvchilar",data:[this.staticss1.total_students]},{name:"So'rovda qatnashganlar",data:[this.staticss1.attended_students]}],this.series1=[{name:"Jami o'quvchilar",data:[this.staticss1.male_students]},{name:"So'rovda qatnashganlar",data:[this.staticss1.female_students]}]})),this.$axios.get("/v1/integration/regions/",{headers:{"Accept-Language":"oz"}}).then((t=>{this.data_regions=t.data})),this.$axios.get(`/test/total-students-stats/?test_type=${this.tab_choose}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Accept-Language":"oz"}}).then((t=>{this.firstTableData[0].totalStudents=t.data.class_9.total_students,this.firstTableData[0].boys=t.data.class_9.male_students,this.firstTableData[0].girls=t.data.class_9.female_students,this.firstTableData[0].participants=t.data.class_9.total_attended_students,this.firstTableData[0].boyParticipants=t.data.class_9.total_attended_male_students,this.firstTableData[0].girlParticipants=t.data.class_9.total_attended_female_students,this.firstTableData[1].totalStudents=t.data.class_11.total_students,this.firstTableData[1].boys=t.data.class_11.male_students,this.firstTableData[1].girls=t.data.class_11.female_students,this.firstTableData[1].participants=t.data.class_11.total_attended_students,this.firstTableData[1].boyParticipants=t.data.class_11.total_attended_male_students,this.firstTableData[1].girlParticipants=t.data.class_11.total_attended_female_students,t.data.class_9.questions_stats.forEach((t=>{this.firstTableData[0].answers.push(t.attended_students)})),t.data.class_11.questions_stats.forEach((t=>{this.firstTableData[1].answers.push(t.attended_students)}))})),this.$axios.get(`/test/statistics/attendance-by-regions/?test_type=${this.tab_choose}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Accept-Language":"oz"}}).then((t=>{t.data.forEach((t=>{this.chartOptions3.xaxis.categories.push(t.region_name)})),this.staticss=t.data,this.series3=[{name:"Ro'yxatdan o'tganlar",data:[this.staticss[0].total_students,this.staticss[1].total_students,this.staticss[2].total_students,this.staticss[3].total_students,this.staticss[4].total_students,this.staticss[5].total_students,this.staticss[6].total_students,this.staticss[7].total_students,this.staticss[8].total_students,this.staticss[9].total_students,this.staticss[10].total_students,this.staticss[11].total_students,this.staticss[12].total_students,this.staticss[13].total_students]},{name:"So'rovnomada qatnashganlar",data:[this.staticss[0].attended_students,this.staticss[1].attended_students,this.staticss[2].attended_students,this.staticss[3].attended_students,this.staticss[4].attended_students,this.staticss[5].attended_students,this.staticss[6].attended_students,this.staticss[7].attended_students,this.staticss[8].attended_students,this.staticss[9].attended_students,this.staticss[10].attended_students,this.staticss[11].attended_students,this.staticss[12].attended_students,this.staticss[13].attended_students]}],this.table_datas=t.data,t.data.forEach((t=>{this.secondTableData.push({id:t.region_id,region:t.region_name,totalStudents:t.total_students,boys:t.male_students,girls:t.female_students,participants:t.attended_students,boyParticipants:t.attended_male_students,girlParticipants:t.attended_female_students,answers:Array(10).fill(545678)})}))})).catch((t=>{console.log(t)}))},methods:{getorgan_students(){this.$axios.get(`/test/statistics/students/?test_type=${this.typess}&region_id=${this.reg_parent_id}&district_id=${this.des_parent_id}&school_id=${this.org_parent_id}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Accept-Language":"oz"}}).then((t=>{this.staticss=t.data,this.staticss=t.data,this.series=[{name:"Jami o'quvchilar",data:[this.staticss.total_students]},{name:"So'rovda qatnashganlar",data:[this.staticss.attended_students]}],this.series1=[{name:"Jami o'quvchilar",data:[this.staticss.male_students]},{name:"So'rovda qatnashganlar",data:[this.staticss.female_students]}]})).catch((t=>{console.log(t)}))},getStatistics_students(){this.$axios.get(`/test/statistics/students/?test_type=${this.typess}&region_id=${this.reg_parent_id}&district_id=${this.des_parent_id}&school_id=${this.org_parent_id}&class_id=${this.getstudents}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Accept-Language":"oz"}}).then((t=>{this.staticss=t.data,this.staticss=t.data,this.series=[{name:"Jami o'quvchilar",data:[this.staticss.total_students]},{name:"So'rovda qatnashganlar",data:[this.staticss.attended_students]}],this.series1=[{name:"Jami o'quvchilar",data:[this.staticss.male_students]},{name:"So'rovda qatnashganlar",data:[this.staticss.female_students]}]})).catch((t=>{console.log(t)}))},get_dist(){this.$axios.get(`/v1/integration/districts/?region_id=${this.reg_parent_id}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Accept-Language":"oz"}}).then((t=>{this.data_dist=t.data,this.$axios.get(`/test/statistics/students/?test_type=${this.typess}&region_id=${this.reg_parent_id}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Accept-Language":"oz"}}).then((t=>{this.staticss=t.data,this.series=[{name:"Jami o'quvchilar",data:[this.staticss.total_students]},{name:"So'rovda qatnashganlar",data:[this.staticss.attended_students]}],this.series1=[{name:"Jami o'quvchilar",data:[this.staticss.male_students]},{name:"So'rovda qatnashganlar",data:[this.staticss.female_students]}],this.staticss=t.data})).catch((t=>{console.log(t)}))})).catch((t=>{console.log(t)})),this.$axios.get(`/test/total-students-stats-by-region/?region_id=${this.reg_parent_id}&class=${this.getstudents}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Accept-Language":"oz"}}).catch((t=>{console.log(t)}))},get_org(){this.$axios.get(`/v1/integration/organizations/?region_id=${this.reg_parent_id}&&district=${this.des_parent_id}`,{headers:{"Accept-Language":"oz"}}).then((t=>{this.data_org=t.data,this.$axios.get(`/test/statistics/students/?test_type=${this.typess}&region_id=${this.reg_parent_id}&district_id=${this.des_parent_id}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Accept-Language":"oz"}}).then((t=>{this.staticss=t.data,this.staticss=t.data,this.series=[{name:"Jami o'quvchilar",data:[this.staticss.total_students]},{name:"So'rovda qatnashganlar",data:[this.staticss.attended_students]}],this.series1=[{name:"Jami o'quvchilar",data:[this.staticss.male_students]},{name:"So'rovda qatnashganlar",data:[this.staticss.female_students]}]})).catch((t=>{console.log(t)}))}))}}},m=f,b=(0,o.A)(m,_,h,!1,null,null,null),y=b.exports;s["default"].use(u.Ay);const k=[{path:"/",name:"home",component:y},{path:"/about",name:"about",component:()=>a.e(594).then(a.bind(a,1417))},{path:"/login",name:"LoginUser",component:()=>a.e(594).then(a.bind(a,6940))},{path:"/questionnaire_for_10",name:"questionnaire_for_10",component:()=>a.e(594).then(a.bind(a,1567))},{path:"/questionnaire_for_11",name:"questionnaire_for_11",component:()=>a.e(594).then(a.bind(a,8336))},{path:"/temperament_type_test",name:"Temperament",component:()=>a.e(594).then(a.bind(a,235))},{path:"/petrushin_determine_of_ability",name:"petrushin_determine_of_ability",component:()=>a.e(594).then(a.bind(a,2544))},{path:"/career_choice_motivation",name:"career_choice_motivation",component:()=>a.e(594).then(a.bind(a,4747))},{path:"/vocational_aptitude_questionnaire",name:"vocational_aptitude_questionnaire",component:()=>a.e(594).then(a.bind(a,8361))},{path:"/interest_map",name:"interest_map",component:()=>a.e(594).then(a.bind(a,3407))},{path:"/character_and_profession",name:"character_and_profession",component:()=>a.e(594).then(a.bind(a,6736))},{path:"/career_selection_matrix",name:"career_selection_matrix",component:()=>a.e(594).then(a.bind(a,9719))}],w=new u.Ay({mode:"history",base:"/",routes:k});var C=w,x=a(3518);s["default"].use(x.Ay);var q=new x.Ay.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),S=a(1641),$=a(4486),L=(a(9313),a(4373));s["default"].config.productionTip=!1,s["default"].component("apexchart",v()),L.A.defaults.baseURL="https://api2-kasb.maktab.uz/api/",s["default"].prototype.$axios=L.A,s["default"].use(S.vGs),s["default"].use($.YS),new s["default"]({router:C,store:q,render:t=>t(c)}).$mount("#app")},7503:function(t,e,a){t.exports=a.p+"img/logo.0ca2ec01.svg"}},e={};function a(s){var i=e[s];if(void 0!==i)return i.exports;var n=e[s]={exports:{}};return t[s].call(n.exports,n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,s,i,n){if(!s){var o=1/0;for(d=0;d<t.length;d++){s=t[d][0],i=t[d][1],n=t[d][2];for(var r=!0,l=0;l<s.length;l++)(!1&n||o>=n)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(r=!1,n<o&&(o=n));if(r){t.splice(d--,1);var c=i();void 0!==c&&(e=c)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[s,i,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,s){return a.f[s](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/about.383015de.js"}}(),function(){a.miniCssF=function(t){return"css/about.910449e6.css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="stats:";a.l=function(s,i,n,o){if(t[s])t[s].push(i);else{var r,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==s||u.getAttribute("data-webpack")==e+n){r=u;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.setAttribute("data-webpack",e+n),r.src=s),t[s]=[i];var _=function(e,a){r.onerror=r.onload=null,clearTimeout(h);var i=t[s];if(delete t[s],r.parentNode&&r.parentNode.removeChild(r),i&&i.forEach((function(t){return t(a)})),e)return e(a)},h=setTimeout(_.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=_.bind(null,r.onerror),r.onload=_.bind(null,r.onload),l&&document.head.appendChild(r)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,s,i,n){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",a.nc&&(o.nonce=a.nc);var r=function(a){if(o.onerror=o.onload=null,"load"===a.type)i();else{var s=a&&a.type,r=a&&a.target&&a.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+s+": "+r+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=r,o.parentNode&&o.parentNode.removeChild(o),n(l)}};return o.onerror=o.onload=r,o.href=e,s?s.parentNode.insertBefore(o,s.nextSibling):document.head.appendChild(o),o},e=function(t,e){for(var a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var i=a[s],n=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===t||n===e))return i}var o=document.getElementsByTagName("style");for(s=0;s<o.length;s++){i=o[s],n=i.getAttribute("data-href");if(n===t||n===e)return i}},s=function(s){return new Promise((function(i,n){var o=a.miniCssF(s),r=a.p+o;if(e(o,r))return i();t(s,r,null,i,n)}))},i={524:0};a.f.miniCss=function(t,e){var a={594:1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=s(t).then((function(){i[t]=0}),(function(e){throw delete i[t],e})))}}}(),function(){var t={524:0};a.f.j=function(e,s){var i=a.o(t,e)?t[e]:void 0;if(0!==i)if(i)s.push(i[2]);else{var n=new Promise((function(a,s){i=t[e]=[a,s]}));s.push(i[2]=n);var o=a.p+a.u(e),r=new Error,l=function(s){if(a.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var n=s&&("load"===s.type?"missing":s.type),o=s&&s.target&&s.target.src;r.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",r.name="ChunkLoadError",r.type=n,r.request=o,i[1](r)}};a.l(o,l,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,n,o=s[0],r=s[1],l=s[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(l)var d=l(a)}for(e&&e(s);c<o.length;c++)n=o[c],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(d)},s=self["webpackChunkstats"]=self["webpackChunkstats"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[504],(function(){return a(3229)}));s=a.O(s)})();
//# sourceMappingURL=app.a8b6aa54.js.map