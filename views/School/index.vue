<template>
  <div>
    <HeaderComp></HeaderComp>
    <section>
      <div class="statistics-container">
        <div>
          <div class="tab_mains">

            <button @click="grafick=2" :class="{'active':grafick==2}">
              Jadval ko'rinishi
            </button>
          </div>
        </div>

        <div class="filt_f">
          <div class="filt_country">


            <select id="regionSelect" @change="getStatistics_students()" v-model="getstudents" name="regions">
              <option value="9">9-Sinf</option>
              <option value="10">10-Sinf</option>
              <option value="11">11-Sinf</option>

            </select>


          </div>
          <div class="download_btn">
            <svg width="13.333496" height="16.667969" viewBox="0 0 13.3335 16.668" fill="none"
                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>
                Created with Pixso.
              </desc>
              <defs/>
              <path id="Vector (Stroke)"
                    d="M2.5 1.66C2.27 1.66 2.06 1.75 1.91 1.91C1.75 2.06 1.66 2.27 1.66 2.5L1.66 14.16C1.66 14.38 1.75 14.6 1.91 14.75C2.06 14.91 2.27 15 2.5 15L10.83 15C11.05 15 11.26 14.91 11.42 14.75C11.57 14.6 11.66 14.38 11.66 14.16L11.66 6.17L7.15 1.66L2.5 1.66ZM0.73 0.73C1.2 0.26 1.83 0 2.5 0L7.15 0C7.59 0 8.02 0.17 8.33 0.48L0.73 0.73ZM8.33 0.48L12.84 5C13.15 5.31 13.33 5.73 13.33 6.17L13.33 14.16C13.33 14.82 13.06 15.46 12.6 15.93C12.13 16.4 11.49 16.66 10.83 16.66L2.5 16.66C1.83 16.66 1.2 16.4 0.73 15.93C0.26 15.46 0 14.82 0 14.16L0 2.5C0 1.83 0.26 1.19 0.73 0.73L8.33 0.48ZM6.66 5.83C7.12 5.83 7.5 6.2 7.5 6.66L7.5 9.65L8.57 8.57C8.9 8.25 9.43 8.25 9.75 8.57C10.08 8.9 10.08 9.42 9.75 9.75L7.25 12.25C6.93 12.58 6.4 12.58 6.07 12.25L3.57 9.75C3.25 9.42 3.25 8.9 3.57 8.57C3.9 8.25 4.43 8.25 4.75 8.57L5.83 9.65L5.83 6.66C5.83 6.2 6.2 5.83 6.66 5.83Z"
                    fill="#292C30" fill-opacity="1.000000" fill-rule="evenodd"/>
            </svg>

            Yuklab olish
            <svg width="9.175781" height="5.585938" viewBox="0 0 9.17578 5.58594" fill="none"
                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <desc>
                Created with Pixso.
              </desc>
              <defs/>
              <path id="Vector"
                    d="M3.88 5.29L0.29 1.7C-0.34 1.07 0.11 0 1 0L8.17 0C9.06 0 9.51 1.07 8.88 1.7L5.29 5.29C4.9 5.68 4.27 5.68 3.88 5.29Z"
                    fill="#292C30" fill-opacity="1.000000" fill-rule="nonzero"/>
            </svg>

          </div>
        </div>
      </div>
    </section>
    <div v-if="grafick==2" class="table_data">
      <div class="table-container">
        <!-- Первая таблица -->

        <!-- Вторая таблица -->
        <div class="tb_ff">


          <table class="styled-table" v-if="scool_data">
            <thead>
            <tr>
              <th>#</th>
              <th>F.I.O</th>
              <th>Sinfi</th>
              <th v-for="question in questions" :key="question">{{ question }}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(row,index) in scool_data" :key="index">
              <td>{{ row.class_name }}</td>
              <td>{{ row.full_name }}</td>
              <td>{{ row.class_name }} <br> {{ row.class_name_full }}</td>

              <td v-for="(answer, ins) in row.questions_stats && row.questions_stats.length ? row.questions_stats : Array(10).fill({ question: '', student_answer: ['0'] })"
                  :key="ins">
                <div>
                  <span v-if="answer.question" class="text-danger">Savol: {{ answer.question }}</span>
                  <br>
                  <span v-if="answer.student_answer" class="text-primary">Javob: {{ answer.student_answer[0] }}</span>
                </div>
              </td>
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

export default {
  components: {
    HeaderComp,
  },
  data() {
    return {
      scool_data: [],
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
      secondTableData: [],


      staticss: [],
      grafick: 2,
      getstudents: '9',
      des_parent_id: '',
      tab_choose: 'questionnaire_for_9',
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


      series3: [],
      staticss1: [],
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
          categories: [],
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

      data_regions: [],
      data_dist: [],

      reg_parent_id: '',
      data_org: [],
      org_parent_id: '',
      typess: 'questionnaire_for_9',
      table_datas: []
    };
  },
  mounted() {


    this.$axios.get(`/test/students-stats-by-grade/?region_id=${this.$route.query.region_id}&district_id=${this.$route.params.id}&school_id=${this.$route.query.school_id}&class=${this.getstudents}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Accept-Language': 'oz'
      }
    })
        .then(res => {
          this.scool_data = res.data
        })

  },
  methods: {
    getorgan_students() {
      this.$axios.get(`/test/statistics/students/?test_type=${this.typess}&region_id=${this.reg_parent_id}&district_id=${this.des_parent_id}&school_id=${this.org_parent_id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Accept-Language': 'oz'
        }
      })
          .then(res => {

            console.log("hello")
            this.staticss1 = res.data
            this.staticss = res.data
            this.staticss1 = res.data
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
          .catch(error => {
            console.log(error)
          })
    },
    getStatistics_students() {
      this.$axios.get(`/test/statistics/students/?test_type=${this.typess}&region_id=${this.reg_parent_id}&district_id=${this.des_parent_id}&school_id=${this.org_parent_id}&class_id=${this.getstudents}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Accept-Language': 'oz'
        }
      })
      this.$axios.get(`/test/students-stats-by-grade/?region_id=${this.$route.query.region_id}&district_id=${this.$route.params.id}&school_id=${this.$route.query.school_id}&class=${this.getstudents}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Accept-Language': 'oz'
        }
      })
          .then(res => {
            this.scool_data = res.data
          })

    },
    get_dist() {


      this.$axios.get(`/v1/integration/districts/?region_id=${this.reg_parent_id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Accept-Language': 'oz',

        }
      })
          .then(res => {
            this.data_dist = res.data
            this.$axios.get(`/test/statistics/students/?test_type=${this.typess}&region_id=${this.reg_parent_id}`, {
              headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Accept-Language': 'oz'
              }
            })
                .then(res => {
                  this.staticss = res.data
                  this.staticss1 = res.data

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
                  this.staticss = res.data

                })
                .catch(error => {
                  console.log(error)
                })
          })
          .catch(error => {
            console.log(error)
          })


      this.$axios.get(`/test/total-students-stats-by-region/?region_id=${this.reg_parent_id}&class=${this.getstudents}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Accept-Language': 'oz'
        }
      })
          .catch(error => {
            console.log(error)
          })
    },
    get_org() {
      this.$axios.get(`/v1/integration/organizations/?region_id=${this.$route.params.id}&&district=${this.des_parent_id}`, {
        headers: {
          'Accept-Language': 'oz'
        }
      })
          .then(res => {
            this.data_org = res.data
            this.$axios.get(`/test/total-students-stats-by-district/?region_id=${this.$route.params.id}&district_id=${this.des_parent_id}&class=${this.getstudents}`, {
              headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Accept-Language': 'oz'
              }
            })
                .catch(error => {
                  console.log(error)
                })
          })

    }
  }
}
</script>