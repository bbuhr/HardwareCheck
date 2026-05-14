import { SUB_TABS, TABS } from '@/constants/tabs';

interface Props {
  activeTab: string;
  activeSubTab: string;
  onTabChange: (tab: string) => void;
  onSubTabChange: (subTab: string) => void;
}

export function Tabs({
  activeTab,
  activeSubTab,
  onTabChange,
  onSubTabChange
}: Props) {
  return (
    <div>
      <div>
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
          >
            <tab.icon size={16} />
            {tab.label}
          </button>
        ))}
      </div>

      <div>
        {SUB_TABS.map(subTab => (
          <button
            key={subTab}
            onClick={() => onSubTabChange(subTab)}
          >
            {subTab}
          </button>
        ))}
      </div>
    </div>
  );
}