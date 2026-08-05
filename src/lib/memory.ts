import fs from 'fs';
import path from 'path';

export interface MemoryEntry {
  id: string;
  projectName: string;
  toneOfVoice: string;
  targetAudience: string;
  keyInsights: string[];
  pastOutputs: Array<{ platform: string; content: string; createdAt: string }>;
  updatedAt: string;
}

const MEMORY_FILE = path.join(process.cwd(), 'agent_memory.json');

export class LocalMemoryCore {
  private getStore(): Record<string, MemoryEntry> {
    if (!fs.existsSync(MEMORY_FILE)) return {};
    try {
      return JSON.parse(fs.readFileSync(MEMORY_FILE, 'utf-8'));
    } catch {
      return {};
    }
  }

  private saveStore(store: Record<string, MemoryEntry>) {
    fs.writeFileSync(MEMORY_FILE, JSON.stringify(store, null, 2), 'utf-8');
  }

  public getMemory(projectName: string): MemoryEntry | null {
    return this.getStore()[projectName.toLowerCase()] || null;
  }

  public updateMemory(entry: Partial<MemoryEntry> & { projectName: string }): MemoryEntry {
    const store = this.getStore();
    const key = entry.projectName.toLowerCase();
    const existing = store[key] || {
      id: Math.random().toString(36).substring(2, 9),
      projectName: entry.projectName,
      toneOfVoice: 'Professional, Engaging, Tech-savvy',
      targetAudience: 'Web3 & AI Creators, Developers, Community',
      keyInsights: [],
      pastOutputs: [],
      updatedAt: new Date().toISOString()
    };

    const updated: MemoryEntry = {
      ...existing,
      ...entry,
      keyInsights: Array.from(new Set([...existing.keyInsights, ...(entry.keyInsights || [])])),
      pastOutputs: [...existing.pastOutputs, ...(entry.pastOutputs || [])],
      updatedAt: new Date().toISOString()
    };

    store[key] = updated;
    this.saveStore(store);
    return updated;
  }
}
