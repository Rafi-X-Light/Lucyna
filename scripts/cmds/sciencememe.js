const axios = require('axios');

module.exports = {
  config: {
    name: "sciencememe",
    aliases: ["smeme"],
    version: "2.0",
    author: "kshitiz",
    countDown: 20,
    role: 0,
    shortDescription: "",
    longDescription: "bot will send you random science meme to entertain you",
    category: "𝗠𝗘𝗠𝗘",
    guide: "{p}smeme",
  },

  sentVideos: [],

  onStart: async function ({ api, event, message }) {
    const senderID = event.senderID;

    const loadingMessage = await message.reply({
      body: "Loading science memevdo..",
    });

    const driveLinks = [
      "https://drive.google.com/file/d/1zhvNKGSmwbDYCWwY4o4SxUpzTpzp-9T4/view?usp=drive_link",
      "https://drive.google.com/file/d/1zPV1B1fq6OrUGm_0Wa3fWGmPbPWAVi_a/view?usp=drive_link",
      "https://drive.google.com/file/d/1zID68yVhiqNenGbglBAP8orzQfPDcEso/view?usp=drive_link",
      "https://drive.google.com/file/d/1yenn1LjsRUT_euvQa6NauA0aWIbh_1Cl/view?usp=drive_link",
      "https://drive.google.com/file/d/1yQRUvffw6XOIzDfY0moeHcsLBiTq8t_W/view?usp=drive_link",
      "https://drive.google.com/file/d/1yFTHUGnva44WcD5S-cYGPsWc-A5QRgKD/view?usp=drive_link",
      "https://drive.google.com/file/d/1xs0VRF8L9wxZdjnd2-Wy8XLKdtbhf08Q/view?usp=drive_link",
      "https://drive.google.com/file/d/1xkaWk4FBV1zasKqYSUheJ7OMh-IMZNqZ/view?usp=drive_link",
      "https://drive.google.com/file/d/1xiCkmQ488Pd7YTuHYQWktXUzivOtREK4/view?usp=drive_link",
      "https://drive.google.com/file/d/1xbV2svU-khI-N4vFIztGNejKL4-giM87/view?usp=drive_link",
      "https://drive.google.com/file/d/1xapdMbmNtWkM9uORPj-66kXRM1rGe1uS/view?usp=drive_link",
      "https://drive.google.com/file/d/1xTgKQ-jd0QkWMFXQx5bJacFzazfoFscZ/view?usp=drive_link",
      "https://drive.google.com/file/d/1xNCU2-ELEuSgvFHCYuUNEMNTJzfNNX-n/view?usp=drive_link",
      "https://drive.google.com/file/d/1wkfL2uL4dUUhd09KPJSjV60RgNwBaBZj/view?usp=drive_link",
      "https://drive.google.com/file/d/1wE-LMMpqa9SjV0To5lW6e00NjId726cR/view?usp=drive_link",
      "https://drive.google.com/file/d/1w9ESHaLH1SMxEB_5cLlb1p5Yv35BOtcU/view?usp=drive_link",
      "https://drive.google.com/file/d/1w4ZXDQEFzHBYsMqF53tBeYzoxAJUlpwr/view?usp=drive_link",
      "https://drive.google.com/file/d/1w1q_sN_Aumawxt0enhpuYHO015UYpSUK/view?usp=drive_link",
      "https://drive.google.com/file/d/1vH1KFh7fvYWuYx7IflKG3mv9EXkDqb01/view?usp=drive_link",
      "https://drive.google.com/file/d/1uzJpvu9aRnBZho7_hq2kkkjoNbLRs48y/view?usp=drive_link",
      "https://drive.google.com/file/d/1uxE-XjWLSUd2GrB7hNw3pqupcU8QPtF1/view?usp=drive_link",
      "https://drive.google.com/file/d/1uTe-1whkYEnG2BTe0ET5-ARcWObYcH5i/view?usp=drive_link",
      "https://drive.google.com/file/d/1uGzF2iFOszVGMe4xlXy6pE8nKvQvjIKG/view?usp=drive_link",
      "https://drive.google.com/file/d/1thY-E3O9JsgZHoUdyHmEge73C2JyMYax/view?usp=drive_link",
      "https://drive.google.com/file/d/1tX_GFeVQoXDRwUTt8p8XASE3fMwhw8gd/view?usp=drive_link",
      "https://drive.google.com/file/d/1tVHJ_xMpATqIelFiNi8WLvflvUF3M-rS/view?usp=drive_link",
      "https://drive.google.com/file/d/1tMKqT0pCoDGddd8w-WNDtLgYSbMrdCV7/view?usp=drive_link",
      "https://drive.google.com/file/d/1tDX-78xqlpkUEThtSNUk3hPGggA_f9ah/view?usp=drive_link",
      "https://drive.google.com/file/d/1ssyMguqSzDjLAN2S78SlVv26dnUwN7rr/view?usp=drive_link",
      "https://drive.google.com/file/d/1sjnoOsl6VMgrK4iRv8cVN3uDP1pyyAGV/view?usp=drive_link",
      "https://drive.google.com/file/d/1siNa1JqlZ5kZ1NOgVYL4SyC2ge3aK75R/view?usp=drive_link",
      "https://drive.google.com/file/d/1s_QjL4fIeEU5OZWJuZjU2eFKgwBr5sv5/view?usp=drive_link",
      "https://drive.google.com/file/d/1sYOAgqQVk8fh1TJkMtqwTMEwwK-_5vk4/view?usp=drive_link",
      "https://drive.google.com/file/d/1sVNCOIiicB2rIRLdhi1s8nVY8B3TTYJr/view?usp=drive_link",
      "https://drive.google.com/file/d/1sNsJ5Ki4VdurN_W9g49ytWRe-mBhL9jc/view?usp=drive_link",
      "https://drive.google.com/file/d/1sJE2f-k3H9JouqFRH_tnIAYTE_h-qEnR/view?usp=drive_link",
      "https://drive.google.com/file/d/1sFkkG4Q6rf9n3X7i1Fg-yZXLPzShw-vS/view?usp=drive_link",
      "https://drive.google.com/file/d/1rY825DCV_habAOHHg0vPRszzKfnSMIPC/view?usp=drive_link",
      "https://drive.google.com/file/d/1r9O987ad3Y-JELdXqOAM54f3mnROLxFz/view?usp=drive_link",
      "https://drive.google.com/file/d/1qzB_-0zvpWwlUeDuhkZ1BWQtYbz8SvnE/view?usp=drive_link",
      "https://drive.google.com/file/d/1qvzP9FSxdBhdQ_tWl_aeQRepRSwHB1TO/view?usp=drive_link",
      "https://drive.google.com/file/d/1qXwKnuvYGvFPWSzA1MOUIdGZrxcIc1Vm/view?usp=drive_link",
      "https://drive.google.com/file/d/1qUj2-CxV5WT-qD2rNGuaPVtGwcj_b-76/view?usp=drive_link",
      "https://drive.google.com/file/d/1q4diHLY0QwAGiuFzBkvSzuv0wNOEjFZ5/view?usp=drive_link",
      "https://drive.google.com/file/d/1pTxy_Kj1BGgpkasAdRUJGrk9oyKtLy_6/view?usp=drive_link",
      "https://drive.google.com/file/d/1pPrcmQzcI6jM6BNTBf5vD17hN80ewHeT/view?usp=drive_link",
      "https://drive.google.com/file/d/1p2N0V1xpff0z1jAeEfQAoV7mn7s6QvMg/view?usp=drive_link",
      "https://drive.google.com/file/d/1p-O1whNydPorj82Vjzhdy_FKejDhvq7B/view?usp=drive_link",
      "https://drive.google.com/file/d/1ottnv2Gr-83YyrFoy-UTe9jKNoKVZR6Y/view?usp=drive_link",
      "https://drive.google.com/file/d/1oSc8GVPeGO_ekPI18x_VwsFlcORI9rai/view?usp=drive_link",
      "https://drive.google.com/file/d/1oSBTqd82EpKx9f_DNaKzoQwY1-q-RmIW/view?usp=drive_link",
      "https://drive.google.com/file/d/1oC9UThPYRiH3zMnkjmBA-NvL19gXIl-7/view?usp=drive_link",
      "https://drive.google.com/file/d/1nbbqD8EOX3KSJymDgS56j0npuYA3G3xD/view?usp=drive_link",
      "https://drive.google.com/file/d/1nHlndkAiIekD2_rsnCSCah7F9xwk4OIl/view?usp=drive_link",
      "https://drive.google.com/file/d/1nHONfmpIz4VH9f4dTG3NTjkSrjBKaX4F/view?usp=drive_link",
      "https://drive.google.com/file/d/1nCClnnEflHeYhKklpVOrcpSkLL3L149y/view?usp=drive_link",
      "https://drive.google.com/file/d/1mv5gW-b1TXhk2MA6M6wS4toZ9nvPCnGb/view?usp=drive_link",
      "https://drive.google.com/file/d/1mfaY45SvwHsEqJBw4Ln0OBE1F_RmrtSq/view?usp=drive_link",
      "https://drive.google.com/file/d/1mZalklIou2WwX9zeNe9AHedLy6zfDtxl/view?usp=drive_link",
      "https://drive.google.com/file/d/1lwqlTHeA_nEfXva86-8J9wKrkcLfUXvC/view?usp=drive_link",
      "https://drive.google.com/file/d/1lm78ttLZzISDWNuAy_NA8AdavTNs55tT/view?usp=drive_link",
      "https://drive.google.com/file/d/1li9iVuT-So2nw5izqUgStOMFcr1GSECu/view?usp=drive_link",
      "https://drive.google.com/file/d/1lU_BCnwYsc98RHMPMDeG5OEZXxTtB-_0/view?usp=drive_link",
      "https://drive.google.com/file/d/1l3HxqXYDA4od6ru7pZA0fmbTCmvx_WOR/view?usp=drive_link",
      "https://drive.google.com/file/d/1kkTsTuEzuGmgZTgw1tZAZcQRmvjqrMi-/view?usp=drive_link",
      "https://drive.google.com/file/d/1kEdmQJPaK9CzOZ6PlDKWy6tzlibyAOfz/view?usp=drive_link",
      "https://drive.google.com/file/d/1k6gzvusrJVFWI7U24aFKOV4lUHf1CIso/view?usp=drive_link",
      "https://drive.google.com/file/d/1jsB_tJmN77CjQjqe0gvBKBjl8QlqZKZP/view?usp=drive_link",
      "https://drive.google.com/file/d/1jYVU3EtH1bkb-7nOBHYuYWBnsSkYTOZB/view?usp=drive_link",
      "https://drive.google.com/file/d/1itIC8ZHH9ykAAiIkOAhuw_Snthmvin5R/view?usp=drive_link",
      "https://drive.google.com/file/d/1iOXEzQW4mvDdQqsLd_UlSvUAwoa6Yi7j/view?usp=drive_link",
      "https://drive.google.com/file/d/1iA6H-1GV_42SMjat3PthrX9fa7fYxxT2/view?usp=drive_link",
      "https://drive.google.com/file/d/1i2ZtNm0kz15JyW5B8ixA5lmULc21VN_K/view?usp=drive_link",
      "https://drive.google.com/file/d/1hf1QiSLRxD1cXmDcD96a2neoGQknmq7E/view?usp=drive_link",
      "https://drive.google.com/file/d/1hYXwHQyQmZehND_JktCMXbs9P4UC2W21/view?usp=drive_link",
      "https://drive.google.com/file/d/1hJeTkuAjyY26bMDXuQUeZaAUeckVwBJw/view?usp=drive_link",
      "https://drive.google.com/file/d/1hInTKoc_Vp9luc-m8i3SJ1dJUe04PeO-/view?usp=drive_link",
      "https://drive.google.com/file/d/1hFBw4JwmFE450sf5y3NGxV2Em0h9PIx8/view?usp=drive_link",
      "https://drive.google.com/file/d/1gLFXw2YhuulFIeM32zBOAR8M-GpZOwsK/view?usp=drive_link",
      "https://drive.google.com/file/d/1fsYiAtjnzPTxl8xcyWDFofmlOF5mGc9I/view?usp=drive_link",
      "https://drive.google.com/file/d/1fcLZjQCEKSZtWyMmnN9YBfLOtcgXiGO9/view?usp=drive_link",
      "https://drive.google.com/file/d/1f_1kT2PC17eUkI9XO0UXru8Jos3lN9rN/view?usp=drive_link",
      "https://drive.google.com/file/d/1elq6Gk2P2oRV9-pTUeIx0I7t_4fO0Yv4/view?usp=drive_link",
      "https://drive.google.com/file/d/1ekEeAIysmMnJiMOK6haqgLmOLnVZFbEy/view?usp=drive_link",
      "https://drive.google.com/file/d/1eALrncOe_8y27ZUK1Yc4aDtaHKgvtvhd/view?usp=drive_link",
      "https://drive.google.com/file/d/1e5M1jEWS36bA8GNb4khW9fROtria4oLM/view?usp=drive_link",
      "https://drive.google.com/file/d/1dXpeqpj_gZRXEStBLbkCFbAUc5FzaBAt/view?usp=drive_link",
      "https://drive.google.com/file/d/1dC5O44cXhQMqNs-Rk__ouBetTKhJNUMv/view?usp=drive_link",
      "https://drive.google.com/file/d/1cF_QfoxADgXzIbsw89rZQWpJHsYFX74r/view?usp=drive_link",
      "https://drive.google.com/file/d/1buTY2CARgnB6mugX6KFAdpHSBjuFS5YD/view?usp=drive_link",
      "https://drive.google.com/file/d/1bQT5rujTO295UZtXKKkH5DgWmLAqGG2v/view?usp=drive_link",
      "https://drive.google.com/file/d/1bBGq-NmDv8l0yNzKTOmHQ5KmJ3p9hBig/view?usp=drive_link",
      "https://drive.google.com/file/d/1aopZcUithBIYjG8on62GgSrm8gDxUC-f/view?usp=drive_link",
      "https://drive.google.com/file/d/1aiDNFOf6cQ6JYgBXpMdORPrxe5lMHa4t/view?usp=drive_link",
      "https://drive.google.com/file/d/1afYgYWmiQ5-CDe5wW6l1upKcwIfReXqe/view?usp=drive_link",
      "https://drive.google.com/file/d/1aCc_IJPNvUci2ZmkcdXDaxd7Tbs51_4z/view?usp=drive_link",
      "https://drive.google.com/file/d/1LdnOEbpHheOJOPntxinDGd8aIeVEr5xF/view?usp=drive_link",
      "https://drive.google.com/file/d/1a5HZaesmdoZ5KjCVWh2U6e8n6936wBWN/view?usp=drive_link",
      "https://drive.google.com/file/d/1a2PnXcHGaNpPbTHaKaJFhqc5kA4HukkX/view?usp=drive_link",
      "https://drive.google.com/file/d/1_hboiuTWB2HXJL0tJ3Cd2kjepr3OpwA5/view?usp=drive_link",
      "https://drive.google.com/file/d/1_Y8NoMnmcwxErK7a7SJqqd37pN8GzmPY/view?usp=drive_link",
      "https://drive.google.com/file/d/1_SIS0G__F81GFzef0vnmnxvKGF1_054R/view?usp=drive_link",
      "https://drive.google.com/file/d/1_8no1NBcUpLBU-0l8Zq28-CWAbG2j-fZ/view?usp=drive_link",
      "https://drive.google.com/file/d/1_8fWXn-721OWRGIo7Asv3EkDPyLMao0v/view?usp=drive_link",
      "https://drive.google.com/file/d/1ZZVwfNFJJP7erucsUueWAQPNjeLOmad8/view?usp=drive_link",
      "https://drive.google.com/file/d/1ZSNd2b7oTpuqICtcgErKMWqIVThC426O/view?usp=drive_link",
      "https://drive.google.com/file/d/1ZOITwzA1CADPYZh48Ryz7q65bUlHADgW/view?usp=drive_link",
      "https://drive.google.com/file/d/1ZNUPJ1neJ_FkhELY2OfpdnFvxB9dbJ9O/view?usp=drive_link",
      "https://drive.google.com/file/d/1Z8YpLaPCHZDjqHplhQX8djELZ_tqLIYX/view?usp=drive_link",
      "https://drive.google.com/file/d/1Z-vTZ7RZJ9fCLCcAQlQ_EWv1UiN4H6bZ/view?usp=drive_link",
      "https://drive.google.com/file/d/1YuOc8AxN-f3UtDqNxyMlj9E6Yv261aTj/view?usp=drive_link",
      "https://drive.google.com/file/d/1YtzzJYAGn6IDO5QpphRz8-awmq7VUi1T/view?usp=drive_link",
      "https://drive.google.com/file/d/1YpdODZ98YZjn1Qi4gXOeGyfNtnTfTAnR/view?usp=drive_link",
      "https://drive.google.com/file/d/1YiYi3884NDnJ3NXqLC_AQ3oa5kFwzZ-C/view?usp=drive_link",
      "https://drive.google.com/file/d/1YgRtSHbnK3AWGqN5oQCMVNaAfQ3e48sR/view?usp=drive_link",
      "https://drive.google.com/file/d/1Y3dbYMW3T_8_QxLIHx_YZQVGR09Tr9Fb/view?usp=drive_link",
      "https://drive.google.com/file/d/1Y1zLeE-XL_A0BouPB4ztQTdEk0ol1ptP/view?usp=drive_link",
      "https://drive.google.com/file/d/1XzEM8jQNqCmFcJ832qgWzfAB98r6G1_p/view?usp=drive_link",
      "https://drive.google.com/file/d/1XwhAeo6g3ku38P3PSFXbhR1NVTQymRs1/view?usp=drive_link",
      "https://drive.google.com/file/d/1Xfq-Lc-7c8c1egiPaBvE6Dk7MvvCno00/view?usp=drive_link",
      "https://drive.google.com/file/d/1XWI2ZUlEQ6bBHCFBuw-Xdsl19BSA4-Qy/view?usp=drive_link",
      "https://drive.google.com/file/d/1XPCtP7ND15hiO1f0lfelDcoiGnkNk6Kx/view?usp=drive_link",
      "https://drive.google.com/file/d/1WzpJ6OUXmO11_aPmUha8vwT--FfFlqF5/view?usp=drive_link",
      "https://drive.google.com/file/d/1Wxcbh3l5yr7RAtYbtwOkBjwdZxP7KqjI/view?usp=drive_link",
      "https://drive.google.com/file/d/1WHSsIW7qxJBLxKBusEz3i5x-eo27477e/view?usp=drive_link",
      "https://drive.google.com/file/d/1WGE9X6VsIpaH02sV_B4oG6QZbWFQyh-_/view?usp=drive_link",
      "https://drive.google.com/file/d/1WE0dtD1rKKbUmikzKxkKTmy64PUV0paX/view?usp=drive_link",
      "https://drive.google.com/file/d/1W42-7I_VdQcg40HL7g0og-mRX7gEBD2z/view?usp=drive_link",
      "https://drive.google.com/file/d/1VubrsMCVg8MXMDKquTIWW4zizHJLEsAr/view?usp=drive_link",
      "https://drive.google.com/file/d/1V_EWDPFWnJPW-Dwv9-7IJelkQrgAM4ua/view?usp=drive_link",
      "https://drive.google.com/file/d/1VOTjpOc_c3B5HB_WO8iZztxH0-Kkf-ZM/view?usp=drive_link",
      "https://drive.google.com/file/d/1VCfCnlKqzmAVTNQaMXLdEeBlRsshrWUu/view?usp=drive_link",
      "https://drive.google.com/file/d/1UesjnDrb73oYtrZ5SMmB2-qbIbI7mppD/view?usp=drive_link",
      "https://drive.google.com/file/d/1UejKkoOh7CAySObmcC8kQ3cCFjJbUjzm/view?usp=drive_link",
      "https://drive.google.com/file/d/1UOn2_YvZdtQfmuYlcxitzn3y1MuNqUyJ/view?usp=drive_link",
      "https://drive.google.com/file/d/1UNkMd27IP2SJ2ennKzd44sN24rMc16DI/view?usp=drive_link",
      "https://drive.google.com/file/d/1TEhdC4vsZho7TfQo0OLPTSGd_-2dH9EW/view?usp=drive_link",
      "https://drive.google.com/file/d/1TBabT4Qyp1KmF5ywBhGkQW7TQwWHxwfl/view?usp=drive_link",
      "https://drive.google.com/file/d/1TBUw68nk98c4pv5Cn9hT5mAO2xdn0qdl/view?usp=drive_link",
      "https://drive.google.com/file/d/1TApYFzHSpdXRHEt8qJFXl_hAgv_QJdkX/view?usp=drive_link",
      "https://drive.google.com/file/d/1T9sBEacfIdd26cZXHoyuO-eNY5D4M4oP/view?usp=drive_link",
      "https://drive.google.com/file/d/1T1VYS70MMWVpVhVD73Etm9NplHc6WwZl/view?usp=drive_link",
      "https://drive.google.com/file/d/1SqGEJHXVY5ymnjbfSsw6q96DdHSrTx9y/view?usp=drive_link",
      "https://drive.google.com/file/d/1SosdcdzsgecC6eApwSV855Y652pUmICt/view?usp=drive_link",
      "https://drive.google.com/file/d/1SlYmPEhX67H0OJshsx9YO_R3fndqyhvd/view?usp=drive_link",
      "https://drive.google.com/file/d/1Sak6gCZFnnSLlSEb7p8555MDQVZM3C-J/view?usp=drive_link",
      "https://drive.google.com/file/d/1SXMoStvYVk8QVrO3mjcqOzRFtRlQdILP/view?usp=drive_link",
      "https://drive.google.com/file/d/1S6Zofiq8aBUvXG2utcTF26SBPhHfh94h/view?usp=drive_link",
      "https://drive.google.com/file/d/1S1sM1qhoHymJTr1hpQutB4gudT3OI3k1/view?usp=drive_link",
      "https://drive.google.com/file/d/1S0O6gswCy-ekCW6YGL9sQ6KKPD1rsaz_/view?usp=drive_link",
      "https://drive.google.com/file/d/1Rxk4SdgxIxXWFrb3UpW4mNZ08aI2iHPX/view?usp=drive_link",
      "https://drive.google.com/file/d/1RXP_6qxygT6PFvk9lcelMxtSQMIgPQT4/view?usp=drive_link",
      "https://drive.google.com/file/d/1RWNChlh7SQmyhVulsqnu9mhksiap-yRX/view?usp=drive_link",
      "https://drive.google.com/file/d/1RKNPnHAg9Q_YRqIS98GfcL0lONMAx7Yu/view?usp=drive_link",
      "https://drive.google.com/file/d/1RK4NR1UuKEpylgoa6P_bY95j_rnByomR/view?usp=drive_link",
      "https://drive.google.com/file/d/1R9_zwD2zrMBhU-RfJjGdJyxQ22lcIf2D/view?usp=drive_link",
      "https://drive.google.com/file/d/1QbSgSntAx9DLOzCkCkVHmv3WfX3l7Ipi/view?usp=drive_link",
      "https://drive.google.com/file/d/1QP18nT01UN2ePIZ6ARs-5PvPg8ctk6lZ/view?usp=drive_link",
      "https://drive.google.com/file/d/1QKki08T-bWQKjXk7hQFh_4AwxC4nbnwW/view?usp=drive_link",
      "https://drive.google.com/file/d/1QG1-ifG9Y5Z9CJAuTWvE8DUtDZMpaAGe/view?usp=drive_link",
      "https://drive.google.com/file/d/1QAYs9RESvpVngyeUADmlOE0SzxPC_TwG/view?usp=drive_link",
      "https://drive.google.com/file/d/1PsQE3eqFIsItmBjBFgHpzxrkAEb7XVg9/view?usp=drive_link",
      "https://drive.google.com/file/d/1PlygD06-_SzUtAM6EQVCW4Szrm50VpdT/view?usp=drive_link",
      "https://drive.google.com/file/d/1PkZudfDXWAY8azk2p9JwrCxWp0FyxPiK/view?usp=drive_link",
      "https://drive.google.com/file/d/1Pk5jgeJmZru-hUywSdVab8AVOHhkXVsj/view?usp=drive_link",
      "https://drive.google.com/file/d/1PEiF_Q0PS7OoEP4XVmn2r58R48eQ7nTG/view?usp=drive_link",
      "https://drive.google.com/file/d/1Oj8hvRmz69Vg_tGxmFfY_WvRORPxeDha/view?usp=drive_link",
      "https://drive.google.com/file/d/1OcPg3Swn7sC5H9MvZCXjEs8HrxqBsppq/view?usp=drive_link",
      "https://drive.google.com/file/d/1OTwoOYO1faddgJgXUajrNX0vTXKIW7Wu/view?usp=drive_link",
      "https://drive.google.com/file/d/1OQuUqxvJ5gGLeydFHl9sohXEx0SRTxJk/view?usp=drive_link",
      "https://drive.google.com/file/d/1OIZbbBVDLp0aFoH-KXkh0sAWqY5_5uRf/view?usp=drive_link",
      "https://drive.google.com/file/d/1O2m4xtiltL2QIDlXbODTmkE0y7Qg9-dR/view?usp=drive_link",
      "https://drive.google.com/file/d/1O0lrJ6xnstNPtOxBRsUjY1GQ8jq4JK6g/view?usp=drive_link",
      "https://drive.google.com/file/d/1NvUKBW4XnXZdPihaaNJchZBw_s4jEJeA/view?usp=drive_link",
      "https://drive.google.com/file/d/1NeR4FLKVSeabkreF9UsFz3dQDYySVfYp/view?usp=drive_link",
      "https://drive.google.com/file/d/1NYHoFeu3xg8KPNbSoDYD0QOFZcjUdmwD/view?usp=drive_link",
      "https://drive.google.com/file/d/1NX7A-TmzayaVNTxJG1FP7A0NrwQQqSGK/view?usp=drive_link",
      "https://drive.google.com/file/d/1NCkGyA7wlpVzprDILXN7PY-H3nkn-IL4/view?usp=drive_link",
      "https://drive.google.com/file/d/1Ms4jdruhre3gbUvJXA9Y8BLC3pfQRd6Y/view?usp=drive_link",
      "https://drive.google.com/file/d/1MfYfeTSv9ltO5ckxvMBXvOHcWUgmuJhk/view?usp=drive_link",
      "https://drive.google.com/file/d/1Me15JkdYD-_sUsb1Q9v55jdk_kKyrZRT/view?usp=drive_link",
      "https://drive.google.com/file/d/1MbfxzalxJuNJ20NPlPLS2k888BvxxEBn/view?usp=drive_link",
      "https://drive.google.com/file/d/1MXue3UW0T5kjoOrHKttW7ZGbILDrQVRg/view?usp=drive_link",
      "https://drive.google.com/file/d/1MTVGxvAeP5L-LJePL_oSsIXwVkJFS_GV/view?usp=drive_link",
      "https://drive.google.com/file/d/1MQ5uBbJU3otxWXyjWcwNRJ4Hy-U1w3Sk/view?usp=drive_link",
      "https://drive.google.com/file/d/1LksqiMA02jZgVc00rdVD2oiJO2MtGPiP/view?usp=drive_link",
      "https://drive.google.com/file/d/1Lgdy6oFfw0nOBFvMA-qZJi4Ia8x___iS/view?usp=drive_link",
      "https://drive.google.com/file/d/1LbTSw7lDK1lSQ7v5iQJfxk3HUtYvD8GH/view?usp=drive_link",
      "https://drive.google.com/file/d/1LMsoGaaVqZsSKWioRk82wO0cdok_PEYH/view?usp=drive_link",
      "https://drive.google.com/file/d/1LBo1ikdg6lu40_7XtvF3TTAgoaQgFioX/view?usp=drive_link",
      "https://drive.google.com/file/d/1L1Imu6VVeaeM38t06qcfjpUk8f3lh4Ul/view?usp=drive_link",
      "https://drive.google.com/file/d/1KndGxh5JqYYWRqLCjtHZTaKt68lJS9DT/view?usp=drive_link",
      "https://drive.google.com/file/d/1KX6kQNs1hWfL9Ebk5vVmXO7-yN4lATWt/view?usp=drive_link",
      "https://drive.google.com/file/d/1KAVTVKlC-gT5jfSfwIeCpEk_nA9bs47c/view?usp=drive_link",
      "https://drive.google.com/file/d/1K7AC_kTJYaFnHIze0h-IidK3bTDNLu5w/view?usp=drive_link",
      "https://drive.google.com/file/d/1JHvOF34xBLHtiwkIMx5fs4x7UVkD8gYV/view?usp=drive_link",
      "https://drive.google.com/file/d/1-0JMKkpVR_3pVRpTs0IEt3_lB79IaKGR/view?usp=drive_link",
      "https://drive.google.com/file/d/1JCGPOSH2waw-IxUqircXANXUIoTpUogW/view?usp=drive_link",
      "https://drive.google.com/file/d/1J7vx72ppfmPyRna7LqCB3e-bbK1Uz1Zi/view?usp=drive_link",
      "https://drive.google.com/file/d/1Io68AQSoS67YwnivnD7RYrgAM-M8mco-/view?usp=drive_link",
      "https://drive.google.com/file/d/1ITEVgQpPb1edk_sC-3j9PPyfuP7_PTVG/view?usp=drive_link",
      "https://drive.google.com/file/d/1ISO1pOeLVCALVshIepROsE3AfFTY9d_m/view?usp=drive_link",
      "https://drive.google.com/file/d/1HxNub1xfZgKfW2f8UwJp-TyvcpPVseAC/view?usp=drive_link",
      "https://drive.google.com/file/d/1HrqgpPvTPBmEnH_6wNmw_tjG-hhEdEeV/view?usp=drive_link",
      "https://drive.google.com/file/d/1HfaNFiAJQHQ7GAgKlIGN6yCoOpujK3rd/view?usp=drive_link",
      "https://drive.google.com/file/d/1HRUD3M83-OjJCbpzPjRM8F4cu0hI6gsE/view?usp=drive_link",
      "https://drive.google.com/file/d/1HCJEfHnHdNB5veOUCnhjeW-itU5ZG7P6/view?usp=drive_link",
      "https://drive.google.com/file/d/1GxLT4qadvpbyiOJztjrpAxfD1MldUK-1/view?usp=drive_link",
      "https://drive.google.com/file/d/1Go3XPUKb2M0Dz2TYr4MTGmIYt94wHTzz/view?usp=drive_link",
      "https://drive.google.com/file/d/1GhemKyDoEk_A0C2MjFwdPO11-Hat_sYy/view?usp=drive_link",
      "https://drive.google.com/file/d/1GhemKyDoEk_A0C2MjFwdPO11-Hat_sYy/view?usp=drive_link",
      "https://drive.google.com/file/d/1GdyjQJQc-fnnDFjdbJ66A0t1XTgrOC9Y/view?usp=drive_link",
      "https://drive.google.com/file/d/1GXlKWKrOn_u-nXdmtfZCLuW1ixT6hvXT/view?usp=drive_link",
      "https://drive.google.com/file/d/1GLqIc5VQAvCSilDHXyqwIyiaxEramO0u/view?usp=drive_link",
      "https://drive.google.com/file/d/1GKTsLuBctd4z1ol0JV5G2sfmuFp69Ae4/view?usp=drive_link",
      "https://drive.google.com/file/d/1FwZh38v0Hp5gVrl3T_0f1ai4NC4arzjc/view?usp=drive_link",
      "https://drive.google.com/file/d/1Fs0GC_OUc0YRO1N6vnrl9oizUYKhz-av/view?usp=drive_link",
      "https://drive.google.com/file/d/1FjugpmKOQGnisiiQu6dZt2Vbhubdi55e/view?usp=drive_link",
      "https://drive.google.com/file/d/1FLNrRNCuUK9RcNUy_7_aLbHgBNlRKs4E/view?usp=drive_link",
      "https://drive.google.com/file/d/1F-_pH_vnYQCeX7SwE0iUxBceCe5rHimk/view?usp=drive_link",
      "https://drive.google.com/file/d/1ELF7Zl3yd7sDqPuLkscbDHhUc_kwqdzj/view?usp=drive_link",
      "https://drive.google.com/file/d/1DVT1e0WnvZfZNTF2BxZGh-7YhGPdepQg/view?usp=drive_link",
      "https://drive.google.com/file/d/1DSTzydGJhe8K_hVebIKoeOwD42E1zd0N/view?usp=drive_link",
      "https://drive.google.com/file/d/1CuRRvvi_AkU2IqKgdcbJ3shzjAzcCelm/view?usp=drive_link",
      "https://drive.google.com/file/d/1Cl5hF6J6H4TWCVbErGFq6eoO-x4Pftsz/view?usp=drive_link",
      "https://drive.google.com/file/d/1CgTM99p8A2ZaT36OoK2nY1dVivRxq35E/view?usp=drive_link",
      "https://drive.google.com/file/d/1CfkcnncK5u5XXeVn1Y44ChdBCFL1rAj4/view?usp=drive_link",
      "https://drive.google.com/file/d/1CfOHNYOrXmrK_u4W847IFoRLzLM73onM/view?usp=drive_link",
      "https://drive.google.com/file/d/1CcJ3cD_SUlVv41a3MTYDdOX6E2Aw2nmn/view?usp=drive_link",
      "https://drive.google.com/file/d/1CBITjz4kNinf2BcStVZZi13MjArzXEgD/view?usp=drive_link",
      "https://drive.google.com/file/d/1C68CcqvOtLFwnc4ih2c2ZPMoVUsHcInM/view?usp=drive_link",
      "https://drive.google.com/file/d/1Bkqr8uGvXSSkAc6F5aNXhSx5hK9LbBRj/view?usp=drive_link",
      "https://drive.google.com/file/d/1Bk9-nY7jt4dVOGFU8qn0e7p9IgEidFDr/view?usp=drive_link",
      "https://drive.google.com/file/d/1BhigURcbB1rr7_ixWdEl21M8nK4r-jhu/view?usp=drive_link",
      "https://drive.google.com/file/d/1BKc5zwft1ln5z-j5vh_gBT_vqqPv0Sfy/view?usp=drive_link",
      "https://drive.google.com/file/d/1BF2gwfVdvLLOmZQK7KnIAZZ0XbNy-JGm/view?usp=drive_link",
      "https://drive.google.com/file/d/1BARz2fEOzW47rV4ePlG-DQetXxafOzjS/view?usp=drive_link",
      "https://drive.google.com/file/d/1Ao-PoZe2B8OHi7h1stXQcbBhC0N2hHjl/view?usp=drive_link",
      "https://drive.google.com/file/d/1AaTBGSbq13MAYcuO4s95n5BF7zC9VxzN/view?usp=drive_link",
      "https://drive.google.com/file/d/19zD56-6LaRP_in0UH6DjkiFsv_ZCn7mX/view?usp=drive_link",
      "https://drive.google.com/file/d/19ygmAhveyx6fR1RlYHk3XFxFt3t7dfGe/view?usp=drive_link",
      "https://drive.google.com/file/d/19b1O4GuYqwymNuDOm5dI94lE8KetgftZ/view?usp=drive_link",
      "https://drive.google.com/file/d/19FIi6rRM7eRRjgGqWTMJCjAJUnYVwVuf/view?usp=drive_link",
      "https://drive.google.com/file/d/195seES24KT4VgvDd2tHAZjO5WPierdDm/view?usp=drive_link",
      "https://drive.google.com/file/d/18jAD76UI8smTeFr7ZdFyfTQPkWObcvbZ/view?usp=drive_link",
      "https://drive.google.com/file/d/18OWDNeIYQpk6VJYPP6eQbFGUe_PqZA0_/view?usp=drive_link",
      "https://drive.google.com/file/d/18N9VuECVNQYVyFDCZT_iR-NKNDOiMyI8/view?usp=drive_link",
      "https://drive.google.com/file/d/18KrUAx6RVN30Hd2qXfRhWpPQbQy1llvi/view?usp=drive_link",
      "https://drive.google.com/file/d/18D5ZdO5_X1m449lNwpvAqV5ynt0mew56/view?usp=drive_link",
      "https://drive.google.com/file/d/181GyjaMx0X10KEKcASv-wH007lYVbkCC/view?usp=drive_link",
      "https://drive.google.com/file/d/18-qj8d7_0QiEuKjaFbDCMHn7AQx651ct/view?usp=drive_link",
      "https://drive.google.com/file/d/17lEOsFdngYyzYckqPWXjmz57KYkSVYQP/view?usp=drive_link",
      "https://drive.google.com/file/d/17h61SQDtMNXj2T9bLxG5S8eTto_VwBnq/view?usp=drive_link",
      "https://drive.google.com/file/d/17ZDo_ium-KB2Lp-lUG6rfevUJYM9lNXM/view?usp=drive_link",
      "https://drive.google.com/file/d/17S2fkvkxhD7-_mJ2NDCHNchTbjaspP2b/view?usp=drive_link",
      "https://drive.google.com/file/d/17LW9bfmKnFWxhPHPgwUHOtWwT1YOb6C9/view?usp=drive_link",
      "https://drive.google.com/file/d/17FwgoIee96JS1NDkWcofwulcdzk6aFzy/view?usp=drive_link",
      "https://drive.google.com/file/d/173Fl8c7TI2kLk9-vIGlfe_BReU6uA3_N/view?usp=drive_link",
      "https://drive.google.com/file/d/16sWL1ht_iiRVSjEzG0gqpcXyIrUaBGhk/view?usp=drive_link",
      "https://drive.google.com/file/d/16ogON0-lmPKm36NaeoW22xY4oMGQ6q6k/view?usp=drive_link",
      "https://drive.google.com/file/d/16lbfIQUdtLBA_9ApTb0GK7wWpVGWDXST/view?usp=drive_link",
      "https://drive.google.com/file/d/16lFWht7n6w7Qqt8uGUd2Xp7tPS5r6SSe/view?usp=drive_link",
      "https://drive.google.com/file/d/16jOJTdg7hooqO_poV1739bPgZ47yBiiP/view?usp=drive_link",
      "https://drive.google.com/file/d/16YNy92FPHU1fI34shYAD0BWYESvbx0yC/view?usp=drive_link",
      "https://drive.google.com/file/d/16WBM4C22if9x5fJZPJKt20eVxGk45YS8/view?usp=drive_link",
      "https://drive.google.com/file/d/16Teg08CgQ4puydGJt_X4N7IOCRbVxuyX/view?usp=drive_link",
      "https://drive.google.com/file/d/16NrJzmkpHn-Wjw9YltH_ThY--yIT1Sn4/view?usp=drive_link",
      "https://drive.google.com/file/d/16CFU5s6tpOZnCUdK2_OQR2TuFixE7-Y7/view?usp=drive_link",
      "https://drive.google.com/file/d/16Brjy_Nb4H1WGS5CXrh3zV69O7tIPVBl/view?usp=drive_link",
      "https://drive.google.com/file/d/16BZSsIJWnJ1WLpsy31VJuMF7ymnxsjP0/view?usp=drive_link",
      "https://drive.google.com/file/d/168FF3MybotOfcEckmI3U0nf7awFJanFN/view?usp=drive_link",
      "https://drive.google.com/file/d/15qvvIBtutLBZLAQfRsMmzYx9TwPumc3P/view?usp=drive_link",
      "https://drive.google.com/file/d/15pbCdQM_yZeq3uFFnqjodwO_10Q01bCe/view?usp=drive_link",
      "https://drive.google.com/file/d/15UetSPgYGssMXty5MQm58b3nJpsxUYnY/view?usp=drive_link",
      "https://drive.google.com/file/d/15GX6ubfaW9GA9UEqSAj2YwGfTINzmIEs/view?usp=drive_link",
      "https://drive.google.com/file/d/1592AU9vshuIQXMo_myUXUq9zk54sZCUU/view?usp=drive_link",
      "https://drive.google.com/file/d/14nLmKxb8yZ7GscTbrVQLKQ9kxH4b7Y3b/view?usp=drive_link",
      "https://drive.google.com/file/d/14dJll_78JvstOHPGyEpwxtV2pH-SzWpz/view?usp=drive_link",
      "https://drive.google.com/file/d/13x453c1O0rQ46ocYZ6WkcEN2zXiDYO26/view?usp=drive_link",
      "https://drive.google.com/file/d/13j_Bs_Aba3v8dBIeCd67EoAAqBo6MGvv/view?usp=drive_link",
      "https://drive.google.com/file/d/13h4M8zK0GTzt9ulA5beejHD4gGU6m0ji/view?usp=drive_link",
      "https://drive.google.com/file/d/13f5wMjsR1R7FWUtE5W158630YorMJ82e/view?usp=drive_link",
      "https://drive.google.com/file/d/13PIH8NFENH8eRs91pxaQIDpw91tULB7N/view?usp=drive_link",
      "https://drive.google.com/file/d/13CREb8wYVVNh0s_28qPq6tSx4OR39gNI/view?usp=drive_link",
      "https://drive.google.com/file/d/1377m0OA4VDDZEBE0jeH78Ju_pS-QzHEw/view?usp=drive_link",
      "https://drive.google.com/file/d/12a-ApzCoxEWD37fBVLex0COjEbB9v5Kq/view?usp=drive_link",
      "https://drive.google.com/file/d/12Yv8N31FRGZZ3F5GfgvGTcvhP9BXHmgo/view?usp=drive_link",
      "https://drive.google.com/file/d/12QZNF20umU8x8hXTB_aMhR8a7Zuy2TEH/view?usp=drive_link",
      "https://drive.google.com/file/d/12-59MVnou9rDzjoO70untEV7QMKyuIhZ/view?usp=drive_link",
      "https://drive.google.com/file/d/116I89P4fLPdEhdYnBHu1_4VVXkx5P5-h/view?usp=drive_link",
      "https://drive.google.com/file/d/10zZk6Q3fn4wce7uw8c0pljF8JTMRchWp/view?usp=drive_link",
      "https://drive.google.com/file/d/10uoKYDMGTOEOG1arkprWCz5-HRTvWo6x/view?usp=drive_link",
      "https://drive.google.com/file/d/10X59VHKV_vWX_xjbdt2T9SNF5PVV8oej/view?usp=drive_link",
      "https://drive.google.com/file/d/10HuLtvT3Cp-kmgdoOuRLLqxo2KmeicFl/view?usp=drive_link",
      "https://drive.google.com/file/d/1-whb-B_UZlEeL8EZ8m8HOrc0t6ydFV-K/view?usp=drive_link",
      "https://drive.google.com/file/d/1-wWQqqvFIE6iVA8LsDxBXbbg0Kvrw1fV/view?usp=drive_link",

    ];

    const availableVideos = driveLinks.filter(video => !this.sentVideos.includes(video));

    if (availableVideos.length === 0) {
      this.sentVideos = [];
    }

    const randomIndex = Math.floor(Math.random() * availableVideos.length);
    const randomDriveLink = availableVideos[randomIndex];


    const fileId = randomDriveLink.match(/\/d\/(.+?)\//)[1];


    const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;

    this.sentVideos.push(randomDriveLink);

    if (senderID !== null) {
      try {
        const response = await axios({
          method: 'GET',
          url: downloadLink,
          responseType: 'stream',
        });

        message.reply({
          body: 'Random science meme',
          attachment: response.data,
        });

        setTimeout(() => {
          api.unsendMessage(loadingMessage.messageID);
        }, 10000);
      } catch (error) {
        console.error('Error downloading video:', error);
        message.reply({
          body: 'Error downloading the video. Please try again later.',
        });
      }
    }
  },
};
