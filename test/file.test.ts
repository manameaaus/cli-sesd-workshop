import { describe, it, expect, beforeEach, afterEach } from "vitest";
import FileService from "../src/services/FileService";
import fs from "fs-extra";
import path from "path";

const tmpPath = path.join(process.cwd(), "test-temp.txt");

describe("FileService", () => {
  const fsrv = new FileService();

  beforeEach(() => {
    fs.writeFileSync(tmpPath, "hello world\nsecond");
  });

  afterEach(() => {
    if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
  });

  it("counts lines, words and characters", () => {
    const counts = fsrv.countWords(tmpPath);
    expect(counts.lines).toBe(2);
    expect(counts.words).toBe(3);
    expect(counts.chars).toBeGreaterThan(0);
  });

  it("returns file info", () => {
    const info = fsrv.getFileInfo(tmpPath);
    expect(info.name).toBe(path.basename(tmpPath));
    expect(typeof info.size).toBe("number");
  });
});
