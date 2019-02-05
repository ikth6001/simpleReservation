package com.ikth.apps.reservation.dto;

import java.util.Objects;

import org.springframework.validation.annotation.Validated;

import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * Category 모델
 */
@ApiModel(description = "Category 모델")
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2019-02-05T12:37:37.915+09:00")

public class Category   {
  @JsonProperty("count")
  private Integer count = null;

  @JsonProperty("id")
  private Integer id = null;

  @JsonProperty("name")
  private String name = null;

  public Category count(Integer count) {
    this.count = count;
    return this;
  }

  /**
   * Category 에 속한 전시상품 수
   * @return count
  **/
  @ApiModelProperty(value = "Category 에 속한 전시상품 수")


  public Integer getCount() {
    return count;
  }

  public void setCount(Integer count) {
    this.count = count;
  }

  public Category id(Integer id) {
    this.id = id;
    return this;
  }

  /**
   * Category Id
   * @return id
  **/
  @ApiModelProperty(value = "Category Id")


  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Category name(String name) {
    this.name = name;
    return this;
  }

  /**
   * Category Name
   * @return name
  **/
  @ApiModelProperty(value = "Category Name")


  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Category category = (Category) o;
    return Objects.equals(this.count, category.count) &&
        Objects.equals(this.id, category.id) &&
        Objects.equals(this.name, category.name);
  }

  @Override
  public int hashCode() {
    return Objects.hash(count, id, name);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Category {\n");
    
    sb.append("    count: ").append(toIndentedString(count)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

