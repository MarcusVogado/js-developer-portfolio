
async function fetchProfileData() {
    const url = 'https://formacao-dio.marcusvogado.com/trilha-js/portfolio/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
