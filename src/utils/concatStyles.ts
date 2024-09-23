export function concatStyles(styles: (string | false | undefined)[]): string {
  return styles.join(" ").replace(/\s+/, " ").trim();
}
