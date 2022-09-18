import axios from 'axios';

export enum AllowlistStatus {
  NotAllowlisted,
  Allowlisted,
  // Discountlisted,
}

export const getAllowlistStatus = async (account: string) => {
  const allowlistUrl = `api/allowlist/${account}`;

  try {
    const response = await axios.get(allowlistUrl);
    const merkleProof = JSON.parse(response.data);

    if (merkleProof) {
      // if (merkleProof.snapshot) {
      //   return {
      //     allowlistStatus: AllowlistStatus.Discountlisted,
      //     merkleProof: merkleProof.snapshot,
      //   };
      // }
      return {
        allowlistStatus: AllowlistStatus.Allowlisted,
        merkleProof: merkleProof.allowlist,
      };
    }
  } catch (error) {
    return {
      allowlistStatus: AllowlistStatus.NotAllowlisted,
      merkleProof: [''],
    };
  }
};
