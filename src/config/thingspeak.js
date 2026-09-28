export const THINGSPEAK_CONFIG = {
  channelId: '3274345',
  apiKey: 'MQFE09V2SF46GH9K', 
  baseUrl: 'https://api.thingspeak.com',
  pollInterval: 15000, // 15 seconds
  fields: [
    { id: 'f1', key: 'field1', name: 'Water Level 1', unit: 'cm', min: 0, max: 1000, th: [300, 500, 700], colors: ['#00ff88', '#fbbf24', '#fb923c', '#ff3c5a'] },
    { id: 'f2', key: 'field2', name: 'Water Level 2', unit: 'cm', min: 0, max: 1000, th: [300, 500, 700], colors: ['#00ff88', '#fbbf24', '#fb923c', '#ff3c5a'] },
    { id: 'f6', key: 'field6', name: 'Water Distance', unit: 'cm', min: 0, max: 400, th: [300, 200, 100], inv: true, colors: ['#00ff88', '#fbbf24', '#fb923c', '#ff3c5a'] }
  ]
};