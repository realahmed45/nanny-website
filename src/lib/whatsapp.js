/**
 * The one place the agency's WhatsApp details live.
 *
 * Every button on the site opens the same conversation, prefilled with the
 * word the bot listens for. Defined once so changing the number is a single
 * edit rather than a hunt through the markup.
 */

export const PHONE = '6281818185522';

/**
 * The bot stays silent until it hears this word, so a visitor arriving from
 * the site lands in a conversation that has already started rather than one
 * that ignores them.
 */
export const PRETEXT = 'nanny';

/**
 * wa.me works everywhere, but on a desktop without the app installed it
 * shows an interstitial before the chat opens. web.whatsapp.com goes
 * straight there in a browser, so the right host depends on the device.
 *
 * Computed at call time rather than at module load: the check reads
 * `navigator`, which does not exist while the bundle is being built.
 */
export function whatsappUrl() {
  const isMobile =
    typeof navigator !== 'undefined' &&
    /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|BlackBerry/i.test(navigator.userAgent)

  return isMobile
    ? `https://wa.me/${PHONE}?text=${encodeURIComponent(PRETEXT)}`
    : `https://web.whatsapp.com/send?phone=${PHONE}&text=${encodeURIComponent(PRETEXT)}`
}

export default whatsappUrl
