import React,{useState,useEffect} from 'react'; 
import companyLogo from '.././image/ipoo.jpg';

function Covid(props) {
    return (
        <div>
            <h3>IPO (Initial Public Offer) in India - Explained in Brief:-</h3>
            <div class="grid-container">
            <img src={companyLogo} alt="BigCo Inc. logo"/>
            <p>
              
        IPO is the short form for the Initial Public Offering. It is a sale of shares by a company to the public for the first time. Without an IPO a company remains a privately held company. The privately held company have a small number of shareholders. These shareholders may range from promoters, who are the owners of the company, their family members, friends, and relatives. Some strategic or professional investors may also hold the shares of a private company like venture capitalists, angel investors or private equity investors.  
            </p>

            <p>
              
            However, after the IPO process which informally is also known as going public, the number of shareholders increases multifold, when compared to the privately held company. IPO allows individuals like you and me and institutional investors to purchase and sell shares of the company. With this initial offering, a company's share becomes eligible for a stock exchange listing. Stock exchange listing facilitates in buying and selling of such shares of companies.
            </p>

            <h2>Advantages of IPO for a company</h2>
            <ul>
            <li>Large and diverse group of investors</li>
            <li>Lower cost of capital to the company</li>
            <li>The largest amount of capital to be raised compared to other options</li>
            <li>Exposure, prestige, and public image of the company improve. This may help speed up growth</li>
            <li>May attract and retain better management and skilled employees</li>
            <li>Helps in further acquisitions (potentially in return for shares of stock)</li>
            </ul>

            <h2>Disadvantages for a company going public</h2>
            <ul>
            <li>Disclosure and compliance requirement in financial, accounting, tax, and other business information field increases. This results in a significant rise in legal, accounting and marketing costs.</li>
            <li>Also, legal and regulatory risks such as lawsuits and shareholder actions rise. Moreover, time and efforts required of management for reporting rises</li>
            <li>Many Information which may be confidential in nature goes to competitors, suppliers and customers offer listing.</li>
            <li>The company may lose control to new shareholders, who might obtain voting rights and can effectively control company decisions through the board of directors</li>
            </ul>

            <h2>What to look before investing through an IPO?</h2>
            <p>Analyzing a well-established listed company from an investment point of view is a tough job. It became more tough and trickier if you are going to analyze any company whom you want to invest through its IPO. There is almost nil historical information available on the public domain to start with. The only source of data about such companies is their red herring prospectus (RHP) or the draft RHP. Thus, this is the document which needs to be scanned with utmost care before making any investment decision in the said IPO. Particularly one should look for the following in any company before making a decision to invest.</p>
            <h2>Points to consider before investing through IPO</h2>
            <ul>
            <li>Usual information on the management team, their qualification, experiences, legal aspects of the management personals and their expertise. A good company is one whose management have expertise and experience in line with the business of the company they are handling.</li>
            <li>Consider how the management plan to use the funds generated from the IPO if it is not offered for sale (OFS). In an OFS no proceeding from the sale of the share goes to the company, rather it goes directly to the selling shareholders. If the money collected through the IPO is to repay long-term debt or it is being used for expansion of the business in the phased manner it is generally considered good.</li>
            <li>Compare with the performance of similar companies who are already public. This will give you a sense of the overall performance of the sector in which the company is operating. Particularly look for margins of the companies and variations in Q-o-Q revenue of different companies, if any.</li>
            <li>Always invest in an IPOs that have good operating margins and at the same time lower valuation in comparison with established and reputed peers.</li>
            <li>Also, give proper attention to the quality of the underwriters and their deals with the company. IPOs that are successful are generally supported by brokerages who are capable to promote new issue well. Smaller investment banks generally underwrite any company and thus bear no valuable information for investors.</li>
            </ul>
            <p>The underwriters and investment banks act like salesmen to an IPO they are dealing with. They stand in between companies and investing public. Actually, a company can't directly go to the market to sell their share. It needs to be done through proper mechanism.</p>

            
            </div>
        </div>
    );
}

export default Covid;

