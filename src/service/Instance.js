import axios from 'axios';
// Axios istemcisi oluştur
const axiosClient = axios.create();

// API base URL'i belirle
axiosClient.defaults.baseURL = 'https://645ce732e01ac6105896bbce.mockapi.io/';

// İstek başlıklarını ayarla
axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

// İsteklerin zaman aşımı süresini belirle (ms cinsinden)
axiosClient.defaults.timeout = 1000;

// İsteklerle birlikte tarayıcı çerezlerini gönder
axiosClient.defaults.withCredentials = true;

// İstek göndermeden önce interceptor kullan
axiosClient.interceptors.request.use(
  async function (config) {
    // Başarılı bir istek durumunda herhangi bir işlem yapmak için buraya kod ekleyebilirsiniz
    return config;
  },
  function (error) {
    if (error.response.status === 401) {
      // 401 hatası durumunda yapılması gereken işlemleri buraya ekleyebilirsiniz
      // Örneğin, kullanıcıyı oturum açma sayfasına yönlendirebilir veya yenileme tokenı isteyebilirsiniz
    }
    return Promise.reject(error);
  },
);

export default axiosClient;
