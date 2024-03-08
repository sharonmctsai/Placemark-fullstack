
import { db } from "../models/db.js";


export const analytics = {
    async calculateAnalytics() {
      const mostBridges = await analytics.mostBridges();
      const averageBridgesPerCountry = await analytics.averageBridgesPerCountry();
  
      return { 
  
        mostBridges,
        averageBridgesPerCountry
      };
    },
  

  
    async mostBridges() {
      let maxValue = 0;
      const users = await db.userStore.getAllUsers();
      for (const user of users) {
        // Get bridges for each user and compare with the current maximum value
        const userBridges = await db.bridgeStore.getUserBridges(user._id);
        if (userBridges.length > maxValue) {
          maxValue = userBridges.length;
        }
      }
      return maxValue;
    },
  
   
    async averageBridgesPerCountry() {
      const countries = await db.countryStore.getAllCountries();
      let totalBridges = 0;
      for (const country of countries) {
        // Get bridges for each country and sum them up
        const countryBridges = await db.bridgeStore.getCountryBridges(country._id);
        totalBridges += countryBridges.length;
      }
      return parseFloat(totalBridges / countries.length).toFixed(2);
    }
  };
  