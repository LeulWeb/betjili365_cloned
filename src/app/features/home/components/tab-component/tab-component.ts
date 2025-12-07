import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tab {
  id: string;
  label: string;
  icon: string;
}

interface Provider {
  id: string;
  name: string;
  logo: string;
}

@Component({
  selector: 'app-tab-component',
  imports: [CommonModule],
  templateUrl: './tab-component.html',
  standalone: true,
})
export class TabComponent {
  activeTab = signal('hot');

  tabs: Tab[] = [
    { id: 'hot', label: 'HOT', icon: '🔥' },
    { id: 'sports', label: 'SPORTS', icon: '⚽' },
    { id: 'casino', label: 'CASINO', icon: '🎰' },
    { id: 'slots', label: 'SLOTS', icon: '🎰' },
    { id: 'crash', label: 'CRASH', icon: '📈' },
    { id: 'table', label: 'TABLE', icon: '🎲' },
    { id: 'lottery', label: 'LOTTERY', icon: '🎯' },
    { id: 'fishing', label: 'FISHING', icon: '🎣' },
    { id: 'arcade', label: 'ARCADE', icon: '🕹️' },
  ];

  tabContent: Record<string, Provider[]> = {
    hot: [
      { id: 'jili', name: 'JILI', logo: 'JL' },
      { id: 'pg', name: 'PG', logo: 'PG' },
      { id: 'fc', name: 'FC', logo: 'FC' },
      { id: 'cq9', name: 'CQ9', logo: 'CQ9' },
    ],
    sports: [
      { id: 'sportsbet', name: 'SportsBet', logo: 'SB' },
      { id: 'betway', name: 'Betway', logo: 'BW' },
      { id: 'pinnacle', name: 'Pinnacle', logo: 'PN' },
    ],
    casino: [
      { id: 'evolution', name: 'Evolution', logo: 'EVO' },
      { id: 'pragmatic', name: 'Pragmatic', logo: 'PP' },
      { id: 'ezugi', name: 'Ezugi', logo: 'EZ' },
    ],
    slots: [
      { id: 'jili', name: 'JILI', logo: 'JL' },
      { id: 'jdb', name: 'JDB', logo: 'JDB' },
      { id: 'fc', name: 'FC', logo: 'FC' },
      { id: 'rich88', name: 'RICH88', logo: 'R88' },
      { id: 'km', name: 'KM', logo: 'KM' },
      { id: 'yl', name: 'YL', logo: 'YL' },
      { id: 'ka', name: 'KA', logo: 'KA' },
      { id: 'pg', name: 'PG', logo: 'PG' },
      { id: 'nextspin', name: 'NEXTSPIN', logo: 'X' },
      { id: 'lucky365', name: 'Lucky365', logo: 'L365' },
      { id: 'cg', name: 'CG', logo: 'CG' },
      { id: 'injoy', name: 'INJOY', logo: 'IJ' },
      { id: 'cq9', name: 'CQ9', logo: 'CQ9' },
      { id: 'pp', name: 'PP', logo: 'PP' },
      { id: 'relax', name: 'RELAX', logo: 'RLX' },
      { id: 'hacksaw', name: 'HACKSAW', logo: 'HS' },
    ],
    crash: [
      { id: 'spribe', name: 'Spribe', logo: 'SPR' },
      { id: 'smartsoft', name: 'SmartSoft', logo: 'SS' },
    ],
    table: [
      { id: 'evolution', name: 'Evolution', logo: 'EVO' },
      { id: 'pragmatic', name: 'Pragmatic', logo: 'PP' },
    ],
    lottery: [
      { id: 'keno', name: 'Keno', logo: 'KN' },
      { id: 'bingo', name: 'Bingo', logo: 'BG' },
    ],
    fishing: [
      { id: 'jili', name: 'JILI', logo: 'JL' },
      { id: 'jdb', name: 'JDB', logo: 'JDB' },
      { id: 'cq9', name: 'CQ9', logo: 'CQ9' },
    ],
    arcade: [
      { id: 'jili', name: 'JILI', logo: 'JL' },
      { id: 'pg', name: 'PG', logo: 'PG' },
      { id: 'ka', name: 'KA', logo: 'KA' },
    ],
  };

  selectTab(tabId: string) {
    this.activeTab.set(tabId);
  }

  getActiveContent(): Provider[] {
    return this.tabContent[this.activeTab()] || [];
  }
}
