export type EndsWith<T extends string> = `${string}${T}`;
export type StartsWith<T extends string> = `${T}${string}`;
export type Contains<T extends string> = `${string}${T}${string}`

export type Domain = EndsWith<".com"> | EndsWith<".net"> | EndsWith<"org"> | EndsWith<".to"> //nah, too many upper level domains

export type PossiblyDomain = Contains<".">;