/**
 * Validates and sanitizes shop domain urls. If Context.CUSTOM_SHOP_DOMAINS is set, shops ending in those domains are
 * allowed. Accepts myshopify.com and myshopify.io by default.
 *
 * @param shop Shop url: {shop}.{domain}
 * @param throwOnInvalid Whether to raise an exception if the shop is invalid
 */
export declare function sanitizeShop(shop: string, throwOnInvalid?: boolean): string | null;
/**
 * Validates and sanitizes Shopify host arguments.
 *
 * @param host Host address
 * @param throwOnInvalid Whether to raise an exception if the host is invalid
 */
export declare function sanitizeHost(host: string, throwOnInvalid?: boolean): string | null;
//# sourceMappingURL=shop-validator.d.ts.map