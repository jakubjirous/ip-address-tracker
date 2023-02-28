/**
 * Helper function that can detect whether a given string is an IPv4 or IPv6 address or a domain name:
 * @param input
 */
export const detectIpOrDomain = (
  input: string
): { ipAddress: string; domain: string } => {
  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  const ipv6Regex = /^([a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}$/;
  const domainRegex = /^((?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,6}$/;

  return {
    ipAddress: ipv4Regex.test(input) || ipv6Regex.test(input) ? input : "",
    domain: domainRegex.test(input) ? input : "",
  };
};
