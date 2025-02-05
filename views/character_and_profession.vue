<template>
  <div>
    <HeaderComp></HeaderComp>
    <section>
    <div class="statistics-container">
    <div>
      <div class="tab_mains">
        <button @click="grafick=1" :class="{'active':grafick==1}">
          Grafik ko'rinishi
        </button>
        <button @click="grafick=2" :class="{'active':grafick==2}">
          Jadval ko'rinishi
        </button>
      </div>
    </div>
    <div class="main_tabs_test">
        <button @click="tab_choose='questionnaire_for_9';$router.push('/')" :class="{'active':tab_choose=='questionnaire_for_9'}" >
          So'rovnoma 9-sinf
        </button>
        <button @click="tab_choose='questionnaire_for_10';$router.push('/questionnaire_for_10')" :class="{'active':tab_choose=='questionnaire_for_10'}" >
          So'rovnoma 10-sinf
        </button>
        <button @click="tab_choose='questionnaire_for_11';$router.push('/questionnaire_for_11')" :class="{'active':tab_choose=='questionnaire_for_11'}" >
          So'rovnoma 11-sinf
        </button>
        <button @click="tab_choose='temperament_type_test';$router.push('/temperament_type_test')" :class="{'active':tab_choose=='temperament_type_test'}" >
          Temperament
        </button>
        <button @click="tab_choose='petrushin_determine_of_ability';$router.push('/petrushin_determine_of_ability')" :class="{'active':tab_choose=='petrushin_determine_of_ability'}" >
          Qobiliyatni aniqlash
        </button>
        <button @click="tab_choose='vocational_aptitude_questionnaire';$router.push('/vocational_aptitude_questionnaire')" :class="{'active':tab_choose=='vocational_aptitude_questionnaire'}" >
          Kasbga moyillikni aniqlash
        </button>
        <button @click="tab_choose='interest_map';$router.push('/interest_map')" :class="{'active':tab_choose=='interest_map'}" >
          Fanlar va sohalarga qiziqishni aniqlash
        </button>

        <button @click="tab_choose='character_and_profession';$router.push('/character_and_profession')" :class="{'active':tab_choose=='character_and_profession'}" >
          Xarakterni kasbga bog‘liqligini aniqlash
        </button>
        <button @click="tab_choose='career_selection_matrix';$router.push('/career_selection_matrix')" :class="{'active':tab_choose=='career_selection_matrix'}" >
         Kelajakdagi kasbni aniqlash
        </button>
        <button @click="tab_choose='career_choice_motivation';$router.push('/career_choice_motivation')" :class="{'active':tab_choose=='career_choice_motivation'}" >
             Kasb tanlashdagi motivatsiyani aniqlash
        </button>
    </div>
      <div class="filt_f">
        <div class="filt_country">
        <select
            id="regionSelect"
            name="regions"
            @change="get_dist()"
            v-model="reg_parent_id"
          >
            <option
              v-for="(reg,index) in data_regions.result"
              :key="index"
              :value="reg.id"
            >
              {{ reg.nameuzlatn }}
            </option>
          </select>

        <select
            id="regionSelect"
            name="regions"
            @change="get_org()"
            v-model="des_parent_id"
          >
            <option
              v-for="(des,index) in data_dist.result"
              :key="index"
              :value="des.id"
            >
                {{ des.nameuzlatn }}
            </option>
          </select>

        <select
            id="regionSelect"
            name="regions"
            v-model="org_parent_id"
            @change="getorgan_students()"
          >
            <option
              v-for="(org,index) in data_org.result"
              :key="index"
              :value="org.organizationid"
            >
                {{ org.organizationfullname }}
            </option>
          </select>



        <select id="regionSelect" @change="getStatistics_students()" v-model="getstudents" name="regions">
          <option value="9">9-Sinf</option>
          <option value="10">10-Sinf</option>
          <option value="11">11-Sinf</option>

        </select>
      </div>
      <div class="download_btn">
        <svg width="13.333496" height="16.667969" viewBox="0 0 13.3335 16.668" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<desc>
			Created with Pixso.
	</desc>
	<defs/>
	<path id="Vector (Stroke)" d="M2.5 1.66C2.27 1.66 2.06 1.75 1.91 1.91C1.75 2.06 1.66 2.27 1.66 2.5L1.66 14.16C1.66 14.38 1.75 14.6 1.91 14.75C2.06 14.91 2.27 15 2.5 15L10.83 15C11.05 15 11.26 14.91 11.42 14.75C11.57 14.6 11.66 14.38 11.66 14.16L11.66 6.17L7.15 1.66L2.5 1.66ZM0.73 0.73C1.2 0.26 1.83 0 2.5 0L7.15 0C7.59 0 8.02 0.17 8.33 0.48L0.73 0.73ZM8.33 0.48L12.84 5C13.15 5.31 13.33 5.73 13.33 6.17L13.33 14.16C13.33 14.82 13.06 15.46 12.6 15.93C12.13 16.4 11.49 16.66 10.83 16.66L2.5 16.66C1.83 16.66 1.2 16.4 0.73 15.93C0.26 15.46 0 14.82 0 14.16L0 2.5C0 1.83 0.26 1.19 0.73 0.73L8.33 0.48ZM6.66 5.83C7.12 5.83 7.5 6.2 7.5 6.66L7.5 9.65L8.57 8.57C8.9 8.25 9.43 8.25 9.75 8.57C10.08 8.9 10.08 9.42 9.75 9.75L7.25 12.25C6.93 12.58 6.4 12.58 6.07 12.25L3.57 9.75C3.25 9.42 3.25 8.9 3.57 8.57C3.9 8.25 4.43 8.25 4.75 8.57L5.83 9.65L5.83 6.66C5.83 6.2 6.2 5.83 6.66 5.83Z" fill="#292C30" fill-opacity="1.000000" fill-rule="evenodd"/>
</svg>

        Yuklab olish
        <svg width="9.175781" height="5.585938" viewBox="0 0 9.17578 5.58594" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<desc>
			Created with Pixso.
	</desc>
	<defs/>
	<path id="Vector" d="M3.88 5.29L0.29 1.7C-0.34 1.07 0.11 0 1 0L8.17 0C9.06 0 9.51 1.07 8.88 1.7L5.29 5.29C4.9 5.68 4.27 5.68 3.88 5.29Z" fill="#292C30" fill-opacity="1.000000" fill-rule="nonzero"/>
</svg>

      </div>
      </div>
  </div>
    </section>
     <div v-if="tab_choose=='character_and_profession'&&grafick==1" class="stats_chart">
        <div class="row">
          <div class="col-xl-6">
             <div class="crads_stats">
              <h3>Umumiy</h3>
              <div style="display: flex;  margin-bottom: 20px;">
                <div style="margin-right: 30px">
                  <p>Jami o'quvchilar</p>
                  <h2>{{ staticss1.total_students}}</h2>
                </div>
                <div>
                  <p>So'rovda qatnashganlar</p>
                  <h2>{{ staticss1.attended_students}}</h2>
                </div>
              </div>
              <apexchart type="bar"  height="170" :options="chartOptions" :series="series"></apexchart>
            </div>
          </div>
          <div class="col-xl-6">
             <div class="crads_stats">
              <h3>Jinsi</h3>
              <div style="display: flex;  margin-bottom: 20px;">
                <div style="margin-right: 30px">
                  <p>O‘g‘il bollar</p>
                  <h2>{{ staticss1.male_students}}</h2>
                </div>
                <div>
                  <p>Qiz bollar</p>
                  <h2>{{staticss1.female_students}}</h2>
                </div>
              </div>
              <apexchart type="bar"  height="170" :options="chartOptions1" :series="series1"></apexchart>
            </div>
          </div>
          <div class="col-xl-12 mt-4">
             <div class="crads_stats">
               <h3>Respublika kesimida</h3>
                 <apexchart type="bar" height="444" :options="chartOptions3" :series="series3"></apexchart>
            </div>
          </div>
        </div>
      </div>
    <div v-if="grafick==2" class="table_data">
         <div class="table-container">
    <!-- Первая таблица -->
    <div class="tb_ff">
      <table class="styled-table">
      <thead>
        <tr>
          <th>Foydalanuvchilar</th>
          <th>Jami o'quvchilar</th>
          <th>O'g'il</th>
          <th>Qiz</th>
          <th>So'rovnomada qatnashganlar</th>
          <th>O'g'il</th>
          <th>Qiz</th>
          <th v-for="question in questions" :key="question">{{ question }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in firstTableData" :key="row.id">
          <td>{{ row.group }}</td>
          <td>{{ row.totalStudents }}</td>
          <td>{{ row.boys }}</td>
          <td>{{ row.girls }}</td>
          <td>{{ row.participants }}</td>
          <td>{{ row.boyParticipants }}</td>
          <td>{{ row.girlParticipants }}</td>
          <td v-for="answer in row.answers" :key="answer">{{ answer }}</td>
        </tr>
      </tbody>
    </table>
    </div>
    <!-- Вторая таблица -->
           <div class="tb_ff">

    <table class="styled-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Viloyat nomi</th>
          <th>Jami o'quvchilar</th>
          <th>O'g'il</th>
          <th>Qiz</th>
          <th>So'rovnomada qatnashganlar</th>
          <th>O'g'il</th>
          <th>Qiz</th>
          <th v-for="question in questions" :key="question">{{ question }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in secondTableData" :key="row.id">
          <td>{{ row.id }}</td>
          <td>{{ row.region }}</td>
          <td>{{ row.totalStudents }}</td>
          <td>{{ row.boys }}</td>
          <td>{{ row.girls }}</td>
          <td>{{ row.participants }}</td>
          <td>{{ row.boyParticipants }}</td>
          <td>{{ row.girlParticipants }}</td>
          <td v-for="answer in row.answers" :key="answer">{{ answer }}</td>
        </tr>
      </tbody>
    </table>
           </div>
  </div>

    </div>
  </div>
</template>
<script>
import HeaderComp from "@/components/HeaderComp.vue";
import VueApexCharts from "vue-apexcharts";

export default {
  components:{
    HeaderComp,
    apexchart: VueApexCharts,
  },
   data() {
  return {
      questions: ["1-savol", "2-savol", "3-savol", "4-savol", "5-savol", "6-savol", "7-savol", "8-savol", "9-savol", "10-savol"],
      firstTableData: [
        {
          id: 1,
          group: "9-sinf",
          totalStudents: '',
          boys: '',
          girls: '',
          participants: '',
          boyParticipants: '',
          girlParticipants: '',
          answers: [],
        },
        {
          id: 2,
          group: "11-sinf",
          totalStudents: '',
          boys: '',
          girls: '',
          participants: '',
          boyParticipants: '',
          girlParticipants: '',
          answers: [],
        },
      ],
      secondTableData: [
      ],


    staticss:[],
    grafick:1,
    getstudents:'9',
    des_parent_id:'',
    tab_choose:'character_and_profession',
      series: [
        {
          name: "Jami o'quvchilar",
          data: [],
        },
        {
          name: "So'rovda qatnashganlar",
          data: [],
        },
      ],
     chartOptions: {
        chart: {
          type: "bar",
          height: 150, // ApexCharts orqali grafik balandligi
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "16px", // Jami o'quvchilar uchun 20px
          },
        },
        colors: ["#FDB44B", "#85D1F5"],
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [""],
          labels: {
            formatter: function (val) {
              return val + " 000";
            },
          },
        },
        yaxis: {
          show: false,
        },
        grid: {
          borderColor: "#f1f1f1",
        },
        legend: {
          position: "bottom",
          horizontalAlign: "center",
        },
      },


      series1: [
        {
          name: "Jami o'quvchilar",
          data: [],
        },
        {
          name: "So'rovda qatnashganlar",
          data: [],
        },
      ],
     chartOptions1: {
        chart: {
          type: "bar",
          height: 150, // ApexCharts orqali grafik balandligi
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "16px", // Jami o'quvchilar uchun 20px
          },
        },
        colors: ["#17A7EE", "#FF6182"],
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [""],
          labels: {
            formatter: function (val) {
              return val + " 000";
            },
          },
        },
        yaxis: {
          show: false,
        },
        grid: {
          borderColor: "#f1f1f1",
        },
        legend: {
          position: "bottom",
          horizontalAlign: "center",
        },
      },



     series3: [

      ],
    staticss1:[],
      chartOptions3: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true, // Ustunlarni stack qilish uchun
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "45%",
            borderRadius: 5,
          },
        },
        colors: ["#FDB44B", "#85D1F5"], // Ranglar
        dataLabels: {
          enabled: true,
          formatter: (val) => `${val}K`,
        },
        xaxis: {
          categories: [

          ],
          labels: {
            style: {
              fontSize: "12px",
            },
          },
        },
        yaxis: {
          labels: {
            formatter: (val) => `${val}K`,
          },
        },
        grid: {
          borderColor: "#f1f1f1",
        },
        legend: {
          position: "bottom",
          horizontalAlign: "center",
        },
        tooltip: {
          y: {
            formatter: (val) => `${val}K`,
          },
        },
      },

    data_regions:[],
    data_dist:[],

    reg_parent_id:'',
    data_org:[],
    org_parent_id:'',
    typess:'character_and_profession',
    table_datas:[]
    };
  },
  mounted() {




    this.$axios.get(`/test/statistics/students/?test_type=${this.tab_choose}`,{
          headers:{
            'Authorization':`Bearer ${localStorage.getItem('token')}`,
            'Accept-Language':'oz'
          }
        })
         .then(res=>{
           this.staticss1=res.data

            this.staticss1=res.data

            this.series = [
            {
              name: "Jami o'quvchilar", // Seriya nomi
              data: [this.staticss1.total_students] // Ma'lumotlar massivi
            },
            {
              name: "So'rovda qatnashganlar", // Seriya nomi
              data: [this.staticss1.attended_students] // Ma'lumotlar massivi
            },
          ];
          this.series1 = [
            {
              name: "Jami o'quvchilar", // Seriya nomi
              data: [this.staticss1.male_students] // Ma'lumotlar massivi
            },
            {
              name: "So'rovda qatnashganlar", // Seriya nomi
              data: [this.staticss1.female_students] // Ma'lumotlar massivi
            },
          ];



         })
    this.$axios.get('/v1/integration/regions/',{
      headers:{
        'Accept-Language':'oz'
      }
    })
        .then(res=>{
          this.data_regions=res.data
        })

    this.$axios.get(`/test/total-students-stats/?test_type=${this.tab_choose}`,{
          headers:{
            'Authorization':`Bearer ${localStorage.getItem('token')}`,
            'Accept-Language':'oz'
          }
        })
        .then(res=>{
          this.firstTableData[0].totalStudents=res.data.class_9.total_students,
          this.firstTableData[0].boys=res.data.class_9.male_students,
          this.firstTableData[0].girls=res.data.class_9.female_students,
          this.firstTableData[0].participants=res.data.class_9.total_attended_students,
          this.firstTableData[0].boyParticipants=res.data.class_9.total_attended_male_students,
          this.firstTableData[0].girlParticipants=res.data.class_9.total_attended_female_students

          this.firstTableData[1].totalStudents=res.data.class_11.total_students,
          this.firstTableData[1].boys=res.data.class_11.male_students,
          this.firstTableData[1].girls=res.data.class_11.female_students,
          this.firstTableData[1].participants=res.data.class_11.total_attended_students,
          this.firstTableData[1].boyParticipants=res.data.class_11.total_attended_male_students,
          this.firstTableData[1].girlParticipants=res.data.class_11.total_attended_female_students

          res.data.class_9.questions_stats.forEach(el=>{
            this.firstTableData[0].answers.push(el.attended_students)
          })
           res.data.class_11.questions_stats.forEach(el=>{
            this.firstTableData[1].answers.push(el.attended_students)
          })
        })

        this.$axios.get(`/test/statistics/attendance-by-regions/?test_type=${this.tab_choose}`,{
          headers:{
            'Authorization':`Bearer ${localStorage.getItem('token')}`,
            'Accept-Language':'oz'
          }
        })
            .then(res=>{
           res.data.forEach(el=>{
          this.chartOptions3.xaxis.categories.push(el.region_name)
          })
          this.staticss=res.data
          this.series3=[
               {
                  name: "Ro'yxatdan o'tganlar",
                  data: [this.staticss[0].total_students, this.staticss[1].total_students, this.staticss[2].total_students, this.staticss[3].total_students, this.staticss[4].total_students, this.staticss[5].total_students, this.staticss[6].total_students, this.staticss[7].total_students, this.staticss[8].total_students, this.staticss[9].total_students, this.staticss[10].total_students, this.staticss[11].total_students,this.staticss[12].total_students,this.staticss[13].total_students],
                },
                {
                  name: "So'rovnomada qatnashganlar",
                 data: [this.staticss[0].attended_students, this.staticss[1].attended_students, this.staticss[2].attended_students, this.staticss[3].attended_students, this.staticss[4].attended_students, this.staticss[5].attended_students, this.staticss[6].attended_students, this.staticss[7].attended_students, this.staticss[8].attended_students, this.staticss[9].attended_students, this.staticss[10].attended_students, this.staticss[11].attended_students,this.staticss[12].attended_students,this.staticss[13].attended_students],
                },
          ]
              this.table_datas=res.data
              res.data.forEach(el=>{
                this.secondTableData.push({
                   id: el.region_id,
                region: el.region_name,
                totalStudents: el.total_students,
                boys: el.male_students,
                girls: el.female_students,
                participants: el.attended_students,
                boyParticipants: el.attended_male_students,
                girlParticipants: el.attended_female_students,
                answers: Array(10).fill(545678),
                })
              })
            })
            .catch(error=>{
              console.log(error)
            })

  },
  methods:{

    getorgan_students(){
       this.$axios.get(`/test/statistics/students/?test_type=${this.typess}&region_id=${this.reg_parent_id}&district_id=${this.des_parent_id}&school_id=${this.org_parent_id}`,{
          headers:{
             'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept-Language':'oz'
          }
        })
        .then(res=>{

          console.log("hello")
          this.staticss1=res.data
          this.staticss=res.data
            this.staticss1=res.data
        this.series = [
            {
              name: "Jami o'quvchilar", // Seriya nomi
              data: [this.staticss1.total_students] // Ma'lumotlar massivi
            },
            {
              name: "So'rovda qatnashganlar", // Seriya nomi
              data: [this.staticss1.attended_students] // Ma'lumotlar massivi
            },
            ]
            this.series1 = [
            {
              name: "Jami o'quvchilar", // Seriya nomi
              data: [this.staticss.total_students] // Ma'lumotlar massivi
            },
            {
              name: "So'rovda qatnashganlar", // Seriya nomi
              data: [this.staticss.attended_students] // Ma'lumotlar massivi
            },
          ];



        })
         .catch(error=>{
                 console.log(error)
               })
    },
    getStatistics_students(){
         this.$axios.get(`/test/statistics/students/?test_type=${this.typess}&region_id=${this.reg_parent_id}&district_id=${this.des_parent_id}&school_id=${this.org_parent_id}&class_id=${this.getstudents}`,{
          headers:{
             'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept-Language':'oz'
          }
        })
        .then(res=>{
          this.staticss=res.data
 this.staticss=res.data
 this.staticss1=res.data

            this.series = [
            {
              name: "Jami o'quvchilar", // Seriya nomi
              data: [this.staticss1.total_students] // Ma'lumotlar massivi
            },
            {
              name: "So'rovda qatnashganlar", // Seriya nomi
              data: [this.staticss1.attended_students] // Ma'lumotlar massivi
            },
          ];
          this.series1 = [
            {
              name: "Jami o'quvchilar", // Seriya nomi
              data: [this.staticss1.male_students] // Ma'lumotlar massivi
            },
            {
              name: "So'rovda qatnashganlar", // Seriya nomi
              data: [this.staticss1.female_students] // Ma'lumotlar massivi
            },
          ];
            this.series = [
            {
              name: "Jami o'quvchilar", // Seriya nomi
              data: [this.staticss.total_students] // Ma'lumotlar massivi
            },
            {
              name: "So'rovda qatnashganlar", // Seriya nomi
              data: [this.staticss.attended_students] // Ma'lumotlar massivi
            },
          ];
          this.series1 = [
            {
              name: "Jami o'quvchilar", // Seriya nomi
              data: [this.staticss.male_students] // Ma'lumotlar massivi
            },
            {
              name: "So'rovda qatnashganlar", // Seriya nomi
              data: [this.staticss.female_students] // Ma'lumotlar massivi
            },
          ];

        })
         .catch(error=>{
                 console.log(error)
               })
    },
        get_dist(){


           this.$axios.get(`/v1/integration/districts/?region_id=${this.reg_parent_id}`,{
          headers:{
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept-Language':'oz',

          }
        })
        .then(res=>{
          this.data_dist=res.data
           this.$axios.get(`/test/statistics/students/?test_type=${this.typess}&region_id=${this.reg_parent_id}`,{
          headers:{
             'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept-Language':'oz'
          }
        })
        .then(res=>{
 this.staticss=res.data
 this.staticss1=res.data

            this.series = [
            {
              name: "Jami o'quvchilar", // Seriya nomi
              data: [this.staticss1.total_students] // Ma'lumotlar massivi
            },
            {
              name: "So'rovda qatnashganlar", // Seriya nomi
              data: [this.staticss1.attended_students] // Ma'lumotlar massivi
            },
          ];
          this.series1 = [
            {
              name: "Jami o'quvchilar", // Seriya nomi
              data: [this.staticss1.male_students] // Ma'lumotlar massivi
            },
            {
              name: "So'rovda qatnashganlar", // Seriya nomi
              data: [this.staticss1.female_students] // Ma'lumotlar massivi
            },
          ];
            this.series = [
            {
              name: "Jami o'quvchilar", // Seriya nomi
              data: [this.staticss.total_students] // Ma'lumotlar massivi
            },
            {
              name: "So'rovda qatnashganlar", // Seriya nomi
              data: [this.staticss.attended_students] // Ma'lumotlar massivi
            },
          ];
          this.series1 = [
            {
              name: "Jami o'quvchilar", // Seriya nomi
              data: [this.staticss.male_students] // Ma'lumotlar massivi
            },
            {
              name: "So'rovda qatnashganlar", // Seriya nomi
              data: [this.staticss.female_students] // Ma'lumotlar massivi
            },
          ];
          this.staticss=res.data

        })
         .catch(error=>{
                 console.log(error)
               })
        })
               .catch(error=>{
                 console.log(error)
               })


       this.$axios.get(`/test/total-students-stats-by-region/?region_id=${this.reg_parent_id}&class=${this.getstudents}`,{
          headers:{
            'Authorization':`Bearer ${localStorage.getItem('token')}`,
            'Accept-Language':'oz'
          }
        })
         .catch(error=>{
           console.log(error)
         })
    },
    get_org(){
           this.$axios.get(`/v1/integration/organizations/?region_id=${this.reg_parent_id}&&district=${this.des_parent_id}`,{
          headers:{
            'Accept-Language':'oz'
          }
        })
        .then(res=>{
          this.data_org=res.data
           this.$axios.get(`/test/statistics/students/?test_type=${this.typess}&region_id=${this.reg_parent_id}&district_id=${this.des_parent_id}`,{
          headers:{
             'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept-Language':'oz'
          }
        })
        .then(res=>{
          this.staticss=res.data
 this.staticss=res.data
 this.staticss1=res.data

            this.series = [
            {
              name: "Jami o'quvchilar", // Seriya nomi
              data: [this.staticss1.total_students] // Ma'lumotlar massivi
            },
            {
              name: "So'rovda qatnashganlar", // Seriya nomi
              data: [this.staticss1.attended_students] // Ma'lumotlar massivi
            },
          ];
          this.series1 = [
            {
              name: "Jami o'quvchilar", // Seriya nomi
              data: [this.staticss1.male_students] // Ma'lumotlar massivi
            },
            {
              name: "So'rovda qatnashganlar", // Seriya nomi
              data: [this.staticss1.female_students] // Ma'lumotlar massivi
            },
          ];
            this.series = [
            {
              name: "Jami o'quvchilar", // Seriya nomi
              data: [this.staticss.total_students] // Ma'lumotlar massivi
            },
            {
              name: "So'rovda qatnashganlar", // Seriya nomi
              data: [this.staticss.attended_students] // Ma'lumotlar massivi
            },
          ];
          this.series1 = [
            {
              name: "Jami o'quvchilar", // Seriya nomi
              data: [this.staticss.male_students] // Ma'lumotlar massivi
            },
            {
              name: "So'rovda qatnashganlar", // Seriya nomi
              data: [this.staticss.female_students] // Ma'lumotlar massivi
            },
          ];

        })
         .catch(error=>{
                 console.log(error)
               })
        })
    }
  }
}
</script>