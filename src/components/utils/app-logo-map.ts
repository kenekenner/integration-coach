// Map of app names to their logo URLs from Celigo server
const BASE_LOGO_URL = 'https://www.celigo.com/wp-content/uploads/2025/10/';

export const APP_LOGO_MAP: Record<string, string> = {
  // Storefronts & Marketplaces
  'Shopify Plus': `${BASE_LOGO_URL}Shopify.png`,
  'Shopify': `${BASE_LOGO_URL}Shopify.png`,
  'Magento (Adobe Commerce)': `${BASE_LOGO_URL}Magento2.png`,
  'BigCommerce': `${BASE_LOGO_URL}bigcommerce.png`,
  'WooCommerce': `${BASE_LOGO_URL}woo-commerce.png`,
  'Squarespace': `${BASE_LOGO_URL}Squarespace.png`,
  'Shopware': `${BASE_LOGO_URL}Shopware.png`,
  'Amazon Seller Central': `${BASE_LOGO_URL}AmazonS3.png`,
  'eBay': `${BASE_LOGO_URL}Ebay.png`,
  'Walmart Marketplace': `${BASE_LOGO_URL}Walmart.png`,
  'Walmart': `${BASE_LOGO_URL}Walmart.png`,
  'Etsy': `${BASE_LOGO_URL}etsy.png`,
  'Mirakl': `${BASE_LOGO_URL}Mirakl.png`,
  'Lazada': `${BASE_LOGO_URL}Lazada.png`,
  'Shopee': `${BASE_LOGO_URL}Shopee.png`,
  'Wayfair': `${BASE_LOGO_URL}Wayfair.png`,
  'Target': `${BASE_LOGO_URL}Target.png`,
  'Wix': `${BASE_LOGO_URL}wix.png`,
  'Salesforce Commerce Cloud': `${BASE_LOGO_URL}Salesforce.png`,
  'Salesforce': `${BASE_LOGO_URL}Salesforce.png`,
  
  // Order Management & Fulfillment
  '3PL Central': `${BASE_LOGO_URL}3PL-Central.png`,
  'Descartes Pacejet': `${BASE_LOGO_URL}Descartes-Pacejet.png`,
  'EasyPost': `${BASE_LOGO_URL}easypost.png`,
  'EasyShip': `${BASE_LOGO_URL}easyship.png`,
  'Freightview': `${BASE_LOGO_URL}freightview.png`,
  'Linnworks': `${BASE_LOGO_URL}Linnworks.png`,
  'NetSuite OMS': `${BASE_LOGO_URL}Oracle-NetSuite.png`,
  'Onfleet': `${BASE_LOGO_URL}Onfleet.png`,
  'RetailOps': `${BASE_LOGO_URL}Retailops.png`,
  'ShipBob': `${BASE_LOGO_URL}ShipBob.png`,
  'ShipEngine': `${BASE_LOGO_URL}ShipEngine.png`,
  'ShipStation': `${BASE_LOGO_URL}Shipstation.png`,
  'Shippo': `${BASE_LOGO_URL}shippo.png`,
  'Brightpearl': `${BASE_LOGO_URL}Brightpearl.png`,
  'Skubana': `${BASE_LOGO_URL}Skubana.png`,
  'SPS Commerce': `${BASE_LOGO_URL}SPS-Commerce.png`,
  
  // ERP / Financial Management
  'Acumatica': `${BASE_LOGO_URL}Acumatica.png`,
  'FinancialForce': `${BASE_LOGO_URL}FinancialForce.png`,
  'Microsoft Dynamics 365 Finance': `${BASE_LOGO_URL}Microsoft-Dynamics-365-Finance.png`,
  'Oracle NetSuite': `${BASE_LOGO_URL}Oracle-NetSuite.png`,
  'QuickBooks Enterprise': `${BASE_LOGO_URL}Intuit-Quickbooks.png`,
  'Sage Intacct': `${BASE_LOGO_URL}sage.png`,
  'SAP S/4HANA': `${BASE_LOGO_URL}SAP-HANA.png`,
  'Workday Financials': `${BASE_LOGO_URL}Workday.png`,
  'Xero': `${BASE_LOGO_URL}Xero.png`,
  
  // Finance / Accounting
  'ADP': `${BASE_LOGO_URL}ADP.png`,
  'Ariba Network (SAP Ariba)': `${BASE_LOGO_URL}SAP-Ariba.png`,
  'Avalara': `${BASE_LOGO_URL}Avalara.png`,
  'Bill.com': `${BASE_LOGO_URL}bill-com.png`,
  'Blackline': `${BASE_LOGO_URL}Blackline.png`,
  'Brex': `${BASE_LOGO_URL}Brex.png`,
  'Coupa': `${BASE_LOGO_URL}coupa.png`,
  'Emburse': `${BASE_LOGO_URL}emburse.png`,
  'Expensify': `${BASE_LOGO_URL}expensify.png`,
  'NetSuite': `${BASE_LOGO_URL}Oracle-NetSuite.png`,
  'Paycom': `${BASE_LOGO_URL}Paycom.png`,
  'Paylocity': `${BASE_LOGO_URL}Paylocity.png`,
  'Procurify': `${BASE_LOGO_URL}Procurify.png`,
  'SAP Concur': `${BASE_LOGO_URL}concur.png`,
  
  // Payments & Point of Sale
  'Adyen': `${BASE_LOGO_URL}adyen.png`,
  'Affirm': `${BASE_LOGO_URL}affirm.png`,
  'Afterpay': `${BASE_LOGO_URL}afterpay.png`,
  'Braintree': `${BASE_LOGO_URL}braintree.png`,
  'Chargebee': `${BASE_LOGO_URL}chargebee.png`,
  'Clover': `${BASE_LOGO_URL}clover.png`,
  'Klarna': `${BASE_LOGO_URL}Klarna.png`,
  'Lightspeed': `${BASE_LOGO_URL}Lightspeed.png`,
  'PayPal': `${BASE_LOGO_URL}PayPal.png`,
  'ReCharge': `${BASE_LOGO_URL}Recharge.png`,
  'Square': `${BASE_LOGO_URL}Square.png`,
  'Stripe': `${BASE_LOGO_URL}stripe.png`,
  'Toast': `${BASE_LOGO_URL}Toast.png`,
  
  // Customer Experience & Support
  'Freshdesk': `${BASE_LOGO_URL}freshdesk.png`,
  'Freshservice': `${BASE_LOGO_URL}freshservice.png`,
  'Gladly': `${BASE_LOGO_URL}Gladly.png`,
  'Gorgias': `${BASE_LOGO_URL}gorgias.png`,
  'Help Scout': `${BASE_LOGO_URL}Help-Scout.png`,
  'Intercom': `${BASE_LOGO_URL}intercom.png`,
  'Retently': `${BASE_LOGO_URL}Retently.png`,
  'Reviews.io': `${BASE_LOGO_URL}Reviews-IO.png`,
  'ServiceNow': `${BASE_LOGO_URL}servicenow.png`,
  'Smile.io': `${BASE_LOGO_URL}Smile-IO.png`,
  'Yotpo': `${BASE_LOGO_URL}yotpo.png`,
  'Zendesk': `${BASE_LOGO_URL}zendesk.png`,
  'Zoho Desk': `${BASE_LOGO_URL}Zoho-Desk.png`,
  
  // Sales & Marketing
  'ActiveCampaign': `${BASE_LOGO_URL}Active-Campaign.png`,
  'Constant Contact': `${BASE_LOGO_URL}constant-contact.png`,
  'Copper': `${BASE_LOGO_URL}copper.png`,
  'Demandbase': `${BASE_LOGO_URL}Demandbase.png`,
  'Dotdigital': `${BASE_LOGO_URL}dotdigital.png`,
  'Facebook Ads': `${BASE_LOGO_URL}Facebook.png`,
  'Google Ads': `${BASE_LOGO_URL}Google-Ads.png`,
  'Google Analytics': `${BASE_LOGO_URL}Google-Analytics.png`,
  'Hootsuite': `${BASE_LOGO_URL}Hootsuite.png`,
  'HubSpot': `${BASE_LOGO_URL}Hubspot.png`,
  'Klaviyo': `${BASE_LOGO_URL}Klaviyo.png`,
  'LinkedIn Ads': `${BASE_LOGO_URL}Linkedin.png`,
  'Mailchimp': `${BASE_LOGO_URL}Mailchimp.png`,
  'Marketo Engage': `${BASE_LOGO_URL}Marketo-Engage.png`,
  'Omnisend': `${BASE_LOGO_URL}omnisend.png`,
  'Outreach': `${BASE_LOGO_URL}Outreach.png`,
  'Pipedrive': `${BASE_LOGO_URL}pipedrive.png`,
  'Salesloft': `${BASE_LOGO_URL}Salesloft.png`,
  'Sprout Social': `${BASE_LOGO_URL}Sprout.png`,
  'SugarCRM': `${BASE_LOGO_URL}sugarcrm.png`,
  'TikTok Ads': `${BASE_LOGO_URL}TikTok.png`,
  'Zoho CRM': `${BASE_LOGO_URL}Zoho-CRM.png`,
  
  // Returns & Reverse Logistics
  'AfterShip': `${BASE_LOGO_URL}aftership.png`,
  'Happy Returns': `${BASE_LOGO_URL}happy-returns.png`,
  'Loop Returns': `${BASE_LOGO_URL}Loop.png`,
  'Narvar': `${BASE_LOGO_URL}narvar.png`,
  'Optoro': `${BASE_LOGO_URL}Optoro.png`,
  'Returnly': `${BASE_LOGO_URL}returnly.png`,
  
  // HR / Employee Management
  'ADP': `${BASE_LOGO_URL}ADP.png`,
  'BambooHR': `${BASE_LOGO_URL}bamboohr.png`,
  'Greenhouse': `${BASE_LOGO_URL}greenhouse.png`,
  'Lever': `${BASE_LOGO_URL}Lever.png`,
  'Namely': `${BASE_LOGO_URL}Namely.png`,
  'OrangeHRM': `${BASE_LOGO_URL}OrangeHRM.png`,
  'Rippling': `${BASE_LOGO_URL}Rippling.png`,
  'SmartRecruiters': `${BASE_LOGO_URL}SmartRecruiters.png`,
  'TriNet': `${BASE_LOGO_URL}trinet.png`,
  'UKG (Pro/Ready)': `${BASE_LOGO_URL}UKG.png`,
  'Workday HCM': `${BASE_LOGO_URL}Workday-1.png`,
  'Workday': `${BASE_LOGO_URL}Workday-1.png`,
  'Zenefits': `${BASE_LOGO_URL}zenefits.png`,
  
  // Data Warehouse / Analytics / BI
  'Amazon Redshift': `${BASE_LOGO_URL}Amazon-Redshift.png`,
  'Amplitude': `${BASE_LOGO_URL}Amplitude.png`,
  'Azure': `${BASE_LOGO_URL}Azure.png`,
  'Databricks': `${BASE_LOGO_URL}databricks.png`,
  'Fivetran': `${BASE_LOGO_URL}Fivetran.png`,
  'GA4': `${BASE_LOGO_URL}Google-Analytics.png`,
  'Google BigQuery': `${BASE_LOGO_URL}Google-Bigquery.png`,
  'Looker': `${BASE_LOGO_URL}Looker.png`,
  'Looker Studio': `${BASE_LOGO_URL}Looker.png`,
  'Mixpanel': `${BASE_LOGO_URL}mixpanel.png`,
  'Power BI': `${BASE_LOGO_URL}Power-BI.png`,
  'Segment': `${BASE_LOGO_URL}Segment.png`,
  'Snowflake': `${BASE_LOGO_URL}Snowflake.png`,
  'Tableau': `${BASE_LOGO_URL}Tableau.png`,
  'Treasure Data': `${BASE_LOGO_URL}Treasure-Data.png`,
  
  // Authentication & Development
  'Azure Active Directory': `${BASE_LOGO_URL}Azure-Actice-Directory.png`,
  'Celigo': `${BASE_LOGO_URL}Celigo.png`,
  'Docker': `${BASE_LOGO_URL}docker.png`,
  'GitHub': `${BASE_LOGO_URL}github.png`,
  'GitLab': `${BASE_LOGO_URL}Gitlab.png`,
  'JumpCloud': `${BASE_LOGO_URL}jumpcloud.png`,
  'Okta': `${BASE_LOGO_URL}Okta.png`,
  'Postman': `${BASE_LOGO_URL}Postman.png`,
  'RabbitMQ': `${BASE_LOGO_URL}RabbitMQ.png`,
  'Twilio': `${BASE_LOGO_URL}twilio.png`,
  
  // Manufacturing / Production
  'Acumatica Manufacturing': `${BASE_LOGO_URL}Acumatica.png`,
  'NetSuite Manufacturing': `${BASE_LOGO_URL}Oracle-NetSuite.png`,
  'Oracle Fusion Manufacturing': `${BASE_LOGO_URL}Oracle.png`,
  'SAP Manufacturing Cloud': `${BASE_LOGO_URL}SAP.png`,
  
  // Demand Planning / Forecasting
  'Anaplan': `${BASE_LOGO_URL}Anaplan.png`,
  'Pigment': `${BASE_LOGO_URL}Pigment.png`,
  
  // Product & Portfolio Management
  'Akeneo': `${BASE_LOGO_URL}Akeneo.png`,
  'Bloomreach': `${BASE_LOGO_URL}Bloomreach.png`,
  'Contentstack': `${BASE_LOGO_URL}Contentstack.png`,
  'Inspectorio': `${BASE_LOGO_URL}inspectorio.png`,
  'Salsify': `${BASE_LOGO_URL}Salsify.png`,
  'Storyblok': `${BASE_LOGO_URL}storyblok.png`,
  
  // Collaboration & Project Management
  'Asana': `${BASE_LOGO_URL}Asana.png`,
  'Box': `${BASE_LOGO_URL}Box.png`,
  'Confluence': `${BASE_LOGO_URL}Confluence.png`,
  'Google Workspace': `${BASE_LOGO_URL}Google.png`,
  'Jira': `${BASE_LOGO_URL}Jira_Software.png`,
  'Jira Software': `${BASE_LOGO_URL}Jira_Software.png`,
  'Microsoft Teams': `${BASE_LOGO_URL}Microsoft-Teams.png`,
  'Monday.com': `${BASE_LOGO_URL}Monday.png`,
  'Notion': `${BASE_LOGO_URL}Notion.png`,
  'Quip': `${BASE_LOGO_URL}Quip.png`,
  'Slack': `${BASE_LOGO_URL}slack.png`,
  'Smartsheet': `${BASE_LOGO_URL}Smartsheet.png`,
  'Trello': `${BASE_LOGO_URL}Trello.png`,
  'Wrike': `${BASE_LOGO_URL}wrike.png`,
};

// Function to get logo URL or generate placeholder
export function getAppLogoUrl(appName: string): string {
  // Check if we have a mapped logo
  if (APP_LOGO_MAP[appName]) {
    return APP_LOGO_MAP[appName];
  }
  
  // Generate placeholder based on app name
  const hash = appName.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);
  
  const hue = Math.abs(hash) % 360;
  
  const initials = appName
    .split(/[\s\-\(\)]/)
    .filter(word => word.length > 0)
    .slice(0, 2)
    .map(word => word[0].toUpperCase())
    .join('');

  const svg = `
    <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="6" fill="hsl(${hue}, 70%, 55%)"/>
      <text x="16" y="21" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" fill="white" text-anchor="middle">${initials}</text>
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}
