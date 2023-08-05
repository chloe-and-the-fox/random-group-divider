import { getAverageMemberCount } from "@pages/Main/utils";
import { useConfig, useStep } from "@providers";

export const ConfigStepDescription = () => {
  const {
    state: { currentStep },
  } = useStep();

  const {
    config: { memberCount, groupCount },
  } = useConfig();

  if (!memberCount || !groupCount || currentStep === "config") {
    return null;
  }

  const avgMemberCount = getAverageMemberCount({
    teamCount: groupCount,
    totalMemberCount: memberCount,
  });
  const avgMemberCountText = avgMemberCount.join(", ");

  return <p>한 팀당 {avgMemberCountText}명씩</p>;
};
