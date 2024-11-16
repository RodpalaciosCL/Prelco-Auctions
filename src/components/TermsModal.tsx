import React from 'react';
import { X } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#2B614D]">Terms & Conditions</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="prose max-w-none">
          <p className="text-gray-600 mb-4">
            Please read carefully. By registering at our auction you are agreeing to the following terms and conditions stated:
          </p>

          <div className="space-y-4 text-gray-700">
            <p>All items are sold as is, where is. There are no guarantees or warranties, expressed or implied. All Sales are Final. There will be no refunds given or returns accepted.</p>

            <p>All announcements made on auction day supersede all past announcements or printed terms or descriptions.</p>

            <p>The Auctioneers make no representation or warranty that any of the items sold conform to any safety standards or are of a particular age, year of manufacture, model, make or condition.</p>

            <p>All descriptions of equipment are believed to be correct. However, neither the owner nor the auctioneers are responsible for any errors in descriptions or conditions. It is the bidder's sole responsibility to inspect each item prior to bidding. The bidder must determine the condition of the items they wish to bid on and bid accordingly.</p>

            <p>If you're the highest bidder when the auctioneer announces an item has been sold, you are the new owner of the item, even though you may not have paid for it yet. The item(s) become the sole responsibility of the high bidder at that point. The buyer assumes all risk of loss and damage at this point. Buyers should guard their items accordingly.</p>

            <p>Should any disputes arise between bidders, the auctioneer has the sole opinion to sell the item to the highest bidder or put the item up for sale again, the auctioneer reserves the right to refuse any bids.</p>

            <p>No items will be released without a PAID invoice present.</p>

            <p>All items sold are subject to a 13% buyer's premium if paying by check or credit card. 10% buyer's premium if paying with cash or certified funds.</p>

            <p>Any invoices over $20,000 may leave a 10% deposit and pay remaining balance within 3 business days, with prior approval.</p>

            <p>All items need to be removed from the auction site within 7 days of auction close. Any items left after the 7th day will be subject to a $100 per day, per item storage fee.</p>

            <p>After 30 Days from Auction, all remaining items will be considered abandoned, and re-sold at the discretion of the auctioneer.</p>

            <p>No titles will be given out on auction day. All paperwork (ie: title, Bill of sale, registration, re-assignments etc) will be mailed out within 4 weeks after the auction. Please note that all bidders are responsible for researching title information and resale procedures for their residency state; that Prelco Auctions is not responsible for re-titling or obtaining further title or registration information other than what was provided to Prelco Auctions prior to/during the present sale.</p>

            <p>A $100 Processing Fee Applies for Title/ Bill Of Sale Transfers</p>
          </div>
        </div>
      </div>
    </div>
  );
}