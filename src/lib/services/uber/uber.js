export const composeBookUberURL = (fromLat, fromLon, toLat, toLon) => `https://m.uber.com/ul/?client_id=VDtTVW2mkxKS9ygc6RGCQ8jV_1PRwr5p&action=setPickup&pickup[latitude]=${fromLat}&pickup[longitude]=${fromLon}&dropoff[latitude]=${toLat}&dropoff[longitude]=${toLon}`;
