# Plan: Fix PayPal Hosted Button Implementation

**Goal:** Resolve issues with PayPal checkouts for products with multiple options (Documentaries: Personal/Institutional, Books: Hardcover/Paperback) by ensuring the submitted form data correctly aligns with the existing PayPal Hosted Button (`_s-xclick`, `hosted_button_id`) configuration.

**File to Modify:** `apps/web/src/app/(marketing)/store/[category]/[id]/paypal-checkout.tsx`

**Steps:**

1.  **Correct `on0` Value for Books:**
    *   Locate the hidden input `name="on0"` for the 'Fangs of the Lone Wolf' book (around line 173).
    *   Change its `value` from `"Format"` to `"Hardcover/Paperback"`.
    *   The `on0` for documentaries (`"Institutional/Personal"`, line 157) remains unchanged.

2.  **Ensure `os0` Select Value Submission:**
    *   Modify the `<select name="os0">` elements for both documentaries (lines 158-166) and books (lines 174-182):
        *   Remove `className="hidden"`.
        *   Add inline style: `style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}`.
        *   Remove the `disabled` attribute.

3.  **Verify `item_number`:**
    *   Confirm the hidden inputs for `item_number` (`DC12` for Unfortunate Brothers, `BK02` for Fangs of the Lone Wolf) are present (lines 190-196). No changes needed here based on current code.

**Visual Plan (Mermaid Diagram):**

```mermaid
graph TD
    A[User Selects Option (Radio Button)] --> B{priceOption State Updated};
    B --> C[User Clicks PayPal Button];
    C --> D[Form Submitted];
    D -- Contains --> E[cmd = _s-xclick];
    D -- Contains --> F[hosted_button_id = Correct ID];
    D -- Contains --> G[on0 = Correct Option Name ("Institutional/Personal" or "Hardcover/Paperback")];
    D -- Contains --> H[os0 = Correct Selected Value ("Institutional", "Personal", "Hardcover", or "Paperback") via visually hidden, *active* select];
    D -- Contains --> I[item_number = Correct ID ("DC12" or "BK02") if applicable];
    D -- Contains --> J[currency_code = USD];
    D --> K[Redirect to PayPal Checkout];

    subgraph "paypal-checkout.tsx Component"
        A
        B
        C
        G
        H
        I
    end

    subgraph "HTML Form"
        D
        E
        F
        J
    end
```

**Summary:** This plan aims to fix the existing mechanism by correcting the `on0` value for books and ensuring the `os0` select value is reliably submitted by making it active but visually hidden.