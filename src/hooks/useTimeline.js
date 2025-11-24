import { useState, useEffect } from "react";
import { fetchTimelineData } from "../utils/fetchTimelineData";

export default function useTimeline() {
  const [activeTab, setActiveTab] = useState("experience");
  const [selectedItem, setSelectedItem] = useState(null);

  const [timelineData, setTimelineData] = useState({
    experience: [],
    education: [],
    educationNonFormal: []
  });

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchTimelineData();
      setTimelineData(data);
    };

    loadData();
  }, []);

  const data = timelineData[activeTab];

  return {
    activeTab,
    setActiveTab,
    selectedItem,
    setSelectedItem,
    timelineData,
    data
  };
}
