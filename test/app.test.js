import chain, { expect } from "chai";
import { handleNumberOfLogin } from "../src/index.ts";

// describe("Purchasing marketplace items", function () {
// //   beforeEach(async () => {
// //     await nft.connect(addr1).mint(URl);
// //     await nft.connect(addr1).setApprovalForAll(marketplace.address, true);
// //     await marketplace.connect(addr1).createOrder(nft.address, 1, toWei(price));
// //   });

// //   it("Should fail for invalid item ids, sold items and when not enough ether is paid", async function () {
// //     await expect(
// //       marketplace.connect(addr2).matchOrder(2, { value: totalPriceInWei })
// //     ).to.be.revertedWith("item doesn`t exits");

// //     await marketplace.connect(addr2).matchOrder(1, { value: totalPriceInWei });
// //     await expect(
// //       marketplace.connect(addr2).matchOrder(1, { value: totalPriceInWei })
// //     ).to.be.revertedWith("item already sold");
// //   });
// //   it("Should fail if item canceled", async function () {
// //     await marketplace.connect(addr1).cancelOrder(1);
// //     await expect(
// //       marketplace.connect(addr2).matchOrder(1, { value: totalPriceInWei })
// //     ).to.be.revertedWith("Item already canceled");
// //   });
// });

const mockData1 = [
  "asdasd",
  "2023-04-18 21:47:09",
  "2023-03-28 02:47:09",
  "2023-03-03 05:47:09",
  "asdasd",
  "2023-03-12 10:47:09",
];

describe("Calculate the number of days of login", function () {
  // add a test hook
  beforeEach(function () {
    // ...some logic before each test is run
  });

  // test a functionality
  it("should add numbers", function () {
    // add an assertion
    expect(sum(1, 2, 3, 4, 5)).to.equal(15);
  });

  // ...some more tests
});
