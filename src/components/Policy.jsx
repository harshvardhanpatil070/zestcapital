import React from "react";

const Policy = () => {
  return (
    <section className="bg-background text-text min-h-screen py-16">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-primary mb-4">
            KYC / AML Policies
          </h2>
          <p className="text-lg">
            Our commitment to compliance ensures a secure and trustworthy environment.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 space-y-8 text-justify">
          <p className="text-lg font-semibold">Zest AMC Group is committed to the highest standards of compliance against money laundering (AML) and anti-terrorist financing (CTF).</p>
          <p className="text-sm text-gray-700">
            The objective of the company’s policy against money laundering and terrorism financing is to actively prevent these risks. The law requires all financial institutions to obtain, verify, and record information that identifies each person who opens an account. We have an obligation to report suspicious client activity relevant to money laundering.
          </p>
          <div>
            <h3 className="text-xl font-semibold text-primary">Money Laundering</h3>
            <p>
              The process of converting funds received from illegal activities (such as fraud, corruption, terrorism, etc.) into other funds or investments that appear legitimate to hide or distort the actual source of funds.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary">
              The Money Laundering Process
            </h3>
            <ul className="list-disc pl-6">
              <li>
                <strong>Placement:</strong> Funds are turned into financial instruments, such as checks, bank accounts, and money transfers, or used to buy high-value goods. Deposits may be split to avoid suspicion ("smurfing").
              </li>
              <li>
                <strong>Layering:</strong> Funds are transferred or moved to other accounts or financial instruments to disguise their origin, making tracking difficult.
              </li>
              <li>
                <strong>Integration:</strong> The funds are re-circulated as legitimate to purchase goods and services.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary">Company Procedures</h3>
            <p>
              Zest AMC adheres to Anti-Money Laundering principles to prevent any action facilitating the legalization of illegally obtained funds. The AML policy means preventing the use of the company's services by criminals for money laundering, terrorist financing, or other criminal activity.
            </p>
            <ul className="list-disc pl-6">
              <li>Know Your Client (KYC) policy and due diligence</li>
              <li>Monitor customer activity</li>
              <li>Maintain records</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary">
              Know Your Customer (KYC) Verification
            </h3>
            <p>
              Each customer must complete a verification procedure before cooperation begins. Clients provide personal information and required documents.
            </p>
            <div>
              <h4 className="text-lg font-semibold">For Individual Clients</h4>
              <ul className="list-disc pl-6">
                <li>Valid passport, driving license, or national ID</li>
                <li>Proof of address (utility bills, bank statements, etc.)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold">For Corporate Clients</h4>
              <ul className="list-disc pl-6">
                <li>Certificate of incorporation</li>
                <li>Memorandum and Articles of Association</li>
                <li>Board resolution to open an account</li>
                <li>Proof of identity for directors and beneficial owners</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary">
              Tracking Customer Activity
            </h3>
            <p>
              We monitor each customer’s activity to identify suspicious transactions. This includes both automated and manual systems to detect inconsistencies with the customer's legitimate business or transaction history.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary">
              Record Maintenance
            </h3>
            <p>
              Records of all transaction data, identification data, and money laundering documentation are kept for at least 7 years after an account is closed.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary">
              Measures Taken
            </h3>
            <p>
              If a transaction is suspected of being related to money laundering or other criminal activities, it is reported to the regulatory authority. Zest AMC reserves the right to block suspicious accounts or terminate relationships with such clients.
            </p>
            <p>
              For more information, contact us at{" "}
              <a
                href="mailto:contact@zestamc.com"
                className="text-primary font-semibold hover:underline"
              >
                contact@zestamc.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Policy;