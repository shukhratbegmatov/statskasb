<template>
  <div>
    <div class="statc_main">
      <div class="nav_logos">
        <router-link to="/">
          <div class="route_logo">
            <div>
            <img src="../assets/img/logo.svg" alt="">
          </div>
          <div class="logo_title">
            O‘zbekiston Respublikasi maktabgacha va maktab ta'limi vazirligi
          </div>
          </div>
        </router-link>
      </div>
      <div class="language-switcher">
        <div class="language" @click="toggleLanguageDropdown">
          <span class="icon">🌍</span>
          <span class="text">{{ selectedLanguage }}</span>
          <span class="arrow">▼</span>
        </div>
        <div v-if="showLanguageDropdown" class="dropdown">
          <div
            v-for="lang in languages"
            :key="lang"
            class="dropdown-item"
            @click="selectLanguage(lang)"
          >
            {{ lang }}
          </div>
        </div>
        <div class="dark-mode-toggle" @click="toggleDarkMode">
          <div :class="['toggle', { active: isDarkMode }]">
            <span class="icon">🌙</span>
          </div>
        </div>
        <a class="out-btn pull-left" @click="extiMain()">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="20" viewBox="0 0 18 20">
            <image id="_157938" data-name="157938" width="18" height="20" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAABHNCSVQICAgIfAhkiAAAANhJREFUOE+91LFKA0EUheFv1UrwLXwAe0V9AUkvmd52Ot/ALtNZ2sybiJVdIGChgoVJr5VgsZKQgIKb3Syj087hnzP33Hur4ai+w6Hm84ajHE3WaFTDUV3jE7MG4QfOcvTYBTTO0cE6YdvdytH/g0Kyi50cvX93ubGjkNxiH8c5elrB+oCucInpMs2XOawPqMI1LvCM0xy9bgyavx6SLWSc4wEnP0AhGeAG221xs4DtLXX3fwPq4GIhaf1aF1BIyhQ7JMXiL9aQZUakqY69GvI3WNHFVmTVfgEDLZlFVEbDkAAAAABJRU5ErkJggg=="/>
          </svg>

          Chiqish
        </a>
      </div>
    </div>
    <div class="statis_section">
      <div class="statis_title">
        O‘quvchilarning
kasb tanlash statistikasi
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      languages: ["O'zbek tili", "Русский"],
      selectedLanguage: "O'zbek tili",
      showLanguageDropdown: false,
      isDarkMode: false,
         tabs: ["Grafik ko‘rinish", "Jadval ko‘rinish"],
      filters: [
        "So‘rovnoma",
        "Temperament",
        "Qobiliyat",
        "Kasbga moyillik",
        "Fanlar va sohalarga qiziqish",
      ],
      dropdownFilters: ["Viloyat", "Tuman", "Maktab", "Sinf"],
      activeTab: 0,
      activeFilter: 0,
    };
  },
  methods: {
      extiMain(){
        localStorage.removeItem('token')
        this.$router.push('/login')
      },
      selectDropdown(index) {
      alert(`${this.dropdownFilters[index]} tanlandi`);
    },
    toggleLanguageDropdown() {
      this.showLanguageDropdown = !this.showLanguageDropdown;
    },
    selectLanguage(lang) {
      this.selectedLanguage = lang;
      this.showLanguageDropdown = false;
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle("dark-mode", this.isDarkMode);
    },

  },
};
</script>
<style scoped>

.dropdown {
  padding: 10px 16px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 20px;
  background-color: #f9f9f9;
  color: #666;
  position: absolute;
  top: 50px;
  cursor: pointer;

}

.download {
  display: flex;
  justify-content: flex-end;
}

.download-btn {
  padding: 10px 16px;
  font-size: 14px;
  color: #666;
  border: 1px solid #ddd;
  border-radius: 20px;
  background-color: #f9f9f9;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.download-btn:hover {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}
.language-switcher {
  display: flex;
  align-items: center;
  gap: 16px;
  font-family: Arial, sans-serif;
}

.language {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  position: relative;
}

.language .icon {
  font-size: 20px;
}

.language .text {
  font-size: 16px;
  font-weight: 500;
}

.language .arrow {
  font-size: 14px;
  font-weight: bold;
}


.dropdown-item {
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
}

.dropdown-item:hover {
  background-color: #f1f1f1;
}

.dark-mode-toggle {
  display: flex;
  align-items: center;
}

.toggle {
  width: 48px;
  height: 24px;
  border-radius: 12px;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 4px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.toggle .icon {
  background-color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 16px;
  transition: transform 0.3s ease;
}

.toggle.active {
  justify-content: flex-start;
  background-color: #333;
}

.toggle.active .icon {
  transform: translateX(0);
}

.dark-mode {
  background-color: #121212;
  color: white;
}
</style>