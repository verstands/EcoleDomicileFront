import React from 'react'
import Tabs from '../../components/Tab'
import RessourceQuiz from './RessourceQuiz';


const QuizMaison = () => {
    const tabs = [
        {
          label: "Quiz et jeux",
          icon: "",
          content: "d",
        },
        {
          label: "Ressources",
          icon: "",
          content: <RessourceQuiz />,
        }

      ];

      const [activeTab, setActiveTab] = React.useState("Quiz et jeux");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <>
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
    </>
  )
}

export default QuizMaison