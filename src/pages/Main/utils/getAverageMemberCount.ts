type GetAverageMemberCountProps = {
  teamCount: number;
  totalMemberCount: number;
};

export function getAverageMemberCount({
  teamCount,
  totalMemberCount,
}: GetAverageMemberCountProps): number[] {
  const maxCount = Math.ceil(totalMemberCount / teamCount);

  if (totalMemberCount % teamCount === 0) {
    return [maxCount];
  }
  return [maxCount - 1, maxCount];
}
