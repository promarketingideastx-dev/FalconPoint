/**
 * Billing Service (RevenueCat Ready)
 * Handles universal subscription logic, acting as an agnostic layer
 * between Native IAP (Apple/Google via RevenueCat) and Web (Stripe).
 */

export const PLATFORMS = {
  WEB: 'web',
  IOS: 'ios',
  ANDROID: 'android'
};

/**
 * Detects the current platform based on the User Agent.
 */
export const detectPlatform = () => {
  if (typeof window === 'undefined') return PLATFORMS.WEB;
  
  const ua = window.navigator.userAgent;
  if (/iPad|iPhone|iPod/.test(ua)) return PLATFORMS.IOS;
  if (/Android/.test(ua)) return PLATFORMS.ANDROID;
  
  return PLATFORMS.WEB;
};

/**
 * Initializes the billing SDKs.
 * Should be called early in the app lifecycle.
 */
export const initializeBilling = async () => {
  const platform = detectPlatform();
  console.log(`[Billing Service] Initializing for platform: ${platform}`);
  
  if (platform === PLATFORMS.IOS || platform === PLATFORMS.ANDROID) {
    // TODO: Initialize RevenueCat SDK here
    // e.g., Purchases.configure({ apiKey: REVENUECAT_API_KEY });
    console.log('[Billing Service] RevenueCat SDK ready pipeline.');
  } else {
    // Web environment: Prepare Stripe logic or keep discreet.
    console.log('[Billing Service] Web billing pipeline ready.');
  }
};

/**
 * Initiates a purchase flow based on the current platform.
 * 
 * @param {string} planId - The ID of the plan to purchase (e.g., 'starter', 'professional', 'enterprise')
 */
export const purchasePlan = async (planId) => {
  const platform = detectPlatform();
  
  try {
    if (platform === PLATFORMS.IOS || platform === PLATFORMS.ANDROID) {
      // Native IAP Flow via RevenueCat
      console.log(`[Billing Service] Initiating Native IAP for ${planId} via RevenueCat...`);
      // e.g., const { customerInfo } = await Purchases.purchasePackage(package);
      alert(`Native IAP Flow (RevenueCat) started for ${planId} on ${platform.toUpperCase()}`);
    } else {
      // Web Flow (Stripe)
      console.log(`[Billing Service] Initiating Web checkout for ${planId}...`);
      alert(`Web Checkout Flow (Stripe) started for ${planId}`);
    }
  } catch (error) {
    console.error('[Billing Service] Purchase failed:', error);
    throw error;
  }
};

/**
 * Universal Subscription Logic: Returns an agnostic subscription status
 * by checking Firestore or RevenueCat CustomerInfo.
 * 
 * The underlying database (Firestore) should store 'subscription_status' 
 * uniformly, regardless of whether it came from Stripe webhooks or RevenueCat webhooks.
 */
export const getSubscriptionStatus = async (userId) => {
  // Mock logic: In reality, fetch from Firestore `/orgs/{orgId}`
  // checking the agnostic `subscription_status` (e.g., 'active', 'past_due', 'canceled')
  return {
    isActive: false,
    plan: null,
    provider: null // 'stripe', 'apple', or 'google'
  };
};
