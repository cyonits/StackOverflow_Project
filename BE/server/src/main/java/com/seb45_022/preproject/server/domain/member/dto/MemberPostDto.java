package com.seb45_022.preproject.server.domain.member.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
@Setter
public class MemberPostDto {
    @NotBlank
    @ApiModelProperty(example = "sampleEmail@gmail.com", position = 1)
    @Email(message = "이메일 형식에 맞지 않습니다.")
    private String email;

    @NotBlank
    @ApiModelProperty(example = "sample1234", position = 2)
    @Pattern(regexp = "(?=.*\\d)(?=.*[a-zA-ZS]).{8,}", message = "영어와 숫자를 최소 1개 포함하여 8자 이상이어야합니다.")
    private String password;

    @NotBlank
    @ApiModelProperty(example = "Sample", position = 3)
    @Pattern(regexp = "^[a-zA-Z가-헿0-9]{4,}$", message = "4자 이상부터 가능하며 특수 문자가 없어야 합니다.")
    private String displayName;

}
