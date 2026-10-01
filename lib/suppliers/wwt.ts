import type {Watch} from "@/lib/catalog/types";
/** WWT adapter boundary. Credentials/feed URL must live in environment variables, never Git. */
export async function fetchWWTCatalog():Promise<Watch[]>{const url=process.env.WWT_FEED_URL;if(!url)return [];throw new Error("WWT feed parser will be enabled once the supplier feed format/access is confirmed.");}