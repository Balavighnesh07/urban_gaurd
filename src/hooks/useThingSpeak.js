import { useState, useEffect, useCallback } from 'react';
import { THINGSPEAK_CONFIG } from '../config/thingspeak';

export const useThingSpeakData = () => {
  const [liveData, setLiveData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const url = `${THINGSPEAK_CONFIG.baseUrl}/channels/${THINGSPEAK_CONFIG.channelId}/feeds/last.json?api_key=${THINGSPEAK_CONFIG.apiKey}&t=${Date.now()}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error('ThingSpeak API error');
      const json = await response.json();

      setLiveData({
        timestamp: json.created_at,
        field1: parseFloat(json.field1) || 0,
        field2: parseFloat(json.field2) || 0,
        field6: parseFloat(json.field6) || 0,
        field7: parseInt(json.field7) || 0,
        field8: parseInt(json.field8) || 0,
      });
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, THINGSPEAK_CONFIG.pollInterval);
    return () => clearInterval(interval);
  }, [fetchData]);

  return { liveData, loading, error, refetch: fetchData };
};

export const getStatus = (value, fieldConfig) => {
  if (value === null || value === undefined || isNaN(value)) return { color: '#3d6b82', label: 'N/A' };
  const t = fieldConfig.th;
  if (fieldConfig.inv) {
    if (value > t[0]) return { color: fieldConfig.colors[0], label: 'Normal' };
    if (value > t[1]) return { color: fieldConfig.colors[1], label: 'Warning' };
    if (value > t[2]) return { color: fieldConfig.colors[2], label: 'Critical' };
    return { color: fieldConfig.colors[3], label: 'Critical' };
  } else {
    if (value < t[0]) return { color: fieldConfig.colors[0], label: 'Normal' };
    if (value < t[1]) return { color: fieldConfig.colors[1], label: 'Warning' };
    if (value < t[2]) return { color: fieldConfig.colors[2], label: 'Warning' };
    return { color: fieldConfig.colors[3], label: 'Critical' };
  }
};